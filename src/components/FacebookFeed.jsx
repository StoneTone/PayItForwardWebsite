import React, { useEffect, useState } from 'react';

const FacebookFeed = ({ rssUrl, title, link }) => {
  const [fbPosts, setFbPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const fetchFacebookPosts = async () => {
    try {
      const corsProxy = 'https://api.allorigins.win/raw?url=';
      const response = await fetch(corsProxy + encodeURIComponent(rssUrl));
      const rawXml = await response.text();
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(rawXml, "text/xml");
      const items = xmlDoc.querySelectorAll('item');
      
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
    } catch (error) {
      console.error('Error fetching RSS posts:', error);
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
          <p className="text-sm text-slate-600 mb-4">Unable to load recent posts</p>
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