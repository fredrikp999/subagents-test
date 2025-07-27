import React from 'react';
import './BlogList.css';

const BlogList = ({ posts, onPostSelect }) => {
  const truncateContent = (content, maxLength = 200) => {
    const textContent = content.replace(/[#*]/g, '').replace(/\n/g, ' ');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...' 
      : textContent;
  };

  return (
    <div className="blog-list">
      <h2 className="blog-list-title">Latest Articles</h2>
      <div className="blog-list-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <h3 className="blog-card-title">{post.title}</h3>
            {post.date && <time className="blog-card-date">{post.date}</time>}
            <p className="blog-card-excerpt">
              {truncateContent(post.content)}
            </p>
            <button 
              className="blog-card-read-more"
              onClick={() => onPostSelect(post)}
            >
              Read More →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;