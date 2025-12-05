import React, { useEffect, useState } from 'react';

const FacebookFeed = ({ rssUrl, title, link }) => {
  const [fbPosts, setFbPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const corsProxies = [
    'https://api.allorigins.win/raw?url=',
    'https://cors-anywhere.herokuapp.com/',
    'https://api.codetabs.com/v1/proxy?quest='
  ];

  const fetchWithTimeout = async (url, timeout = 15000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/xml, text/xml, */*'
        }
      });
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchFacebookPosts = async (attempt = 0) => {
    try {
      setError(null);
      
      let lastError;
      
      for (let proxyIndex = 0; proxyIndex < corsProxies.length; proxyIndex++) {
        try {
          const corsProxy = corsProxies[proxyIndex];
          const proxyUrl = corsProxy + encodeURIComponent(rssUrl);
          
          const response = await fetchWithTimeout(proxyUrl);
          const rawXml = await response.text();
          
          if (!rawXml || rawXml.trim() === '') {
            throw new Error('Empty RSS response');
          }
          
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(rawXml, "text/xml");
          
          const parseError = xmlDoc.querySelector('parsererror');
          if (parseError) {
            throw new Error('Invalid XML format');
          }
          
          const items = xmlDoc.querySelectorAll('item');
          
          if (items.length === 0) {
            throw new Error('No RSS items found');
          }
          
          const posts = Array.from(items).slice(0, 1).map(item => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const mediaContent = item.querySelector('media\\:content, content');
            const mediaUrl = mediaContent?.getAttribute('url');
            
            return {
              title,
              link,
              pubDate,
              description,
              mediaContentUrl: mediaUrl
            };
          });
          
          setFbPosts(posts);
          setRetryCount(0);
          return;
          
        } catch (proxyError) {
          lastError = proxyError;
          console.warn(`Proxy ${proxyIndex + 1} failed:`, proxyError.message);
          continue;
        }
      }
      
      throw lastError || new Error('All proxies failed');
      
    } catch (error) {
      console.error('Error fetching RSS posts:', error);
      
      const maxRetries = 3;
      const shouldRetry = attempt < maxRetries && 
        (error.name === 'AbortError' || 
         error.message.includes('network') ||
         error.message.includes('timeout') ||
         error.message.includes('fetch'));
      
      if (shouldRetry) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
        setRetryCount(attempt + 1);
        
        console.log(`Retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
        await sleep(delay);
        return fetchFacebookPosts(attempt + 1);
      } else {
        setError(error.message || 'Failed to load RSS feed');
        setRetryCount(0);
      }
    } finally {
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchFacebookPosts();
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-1 bg-teal-500 rounded-full mb-4 sm:mb-6"></div>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">{title}</h3>
      
      {loadingPosts ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
          {retryCount > 0 && (
            <p className="ml-3 text-sm text-slate-500">Retrying... ({retryCount}/3)</p>
          )}
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-red-600 mb-2">Failed to load recent posts</p>
            <p className="text-xs text-red-500">{error}</p>
          </div>
          <button
            onClick={() => {
              setLoadingPosts(true);
              setError(null);
              fetchFacebookPosts();
            }}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium mr-3"
          >
            Try Again
          </button>
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            Visit Facebook Page
          </a>
        </div>
      ) : fbPosts.length > 0 ? (
        <div className="space-y-4">
          {fbPosts.map((post, index) => (
            <div key={index} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
              <p className="text-xs text-slate-500 mb-2">
                {new Date(post.pubDate).toLocaleDateString()}
              </p>
              {post.mediaContentUrl && (
                <div className="mb-3">
                  <img
                    src={post.mediaContentUrl}
                    alt="Post image"
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              )}
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {post.description?.replace(/<[^>]*>/g, '').replace(/\(Feed generated with.*?FetchRSS.*?\)/gi, '').trim().substring(0, 120)}...
              </p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-teal-600 hover:text-teal-700 font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            View all posts
          </a>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-sm text-slate-600 mb-4">No recent posts available</p>
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            Visit our Facebook page
          </a>
        </div>
      )}
    </div>
  );
};

export default FacebookFeed;