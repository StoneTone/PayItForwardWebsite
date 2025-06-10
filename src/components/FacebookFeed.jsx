import React, { useEffect, useState } from 'react';

const FacebookFeed = () => {
  const [fbPosts, setFbPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // Fetch Facebook RSS feed
  const fetchFacebookPosts = async () => {
    try {
      // RSS.app feed URL for Facebook page
      const RSS_FEED_URL = 'https://rss.app/feeds/y2Ckti33zM6pBNsN.xml';
      
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`);
      const data = await response.json();
      
      if (data.status === 'ok') {
        setFbPosts(data.items.slice(0, 3)); // Get latest 3 posts
      }
    } catch (error) {
      console.error('Error fetching Facebook posts:', error);
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
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Latest News</h3>
      
      {loadingPosts ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      ) : fbPosts.length > 0 ? (
        <div className="space-y-4">
          {fbPosts.map((post, index) => (
            <div key={index} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
              <h4 className="font-semibold text-teal-700 text-sm mb-2 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-slate-500 mb-2">
                {new Date(post.pubDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {post.description?.replace(/<[^>]*>/g, '').substring(0, 120)}...
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
            href="https://www.facebook.com/profile.php?id=61568421170605" 
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
            href="https://www.facebook.com/profile.php?id=61568421170605" 
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