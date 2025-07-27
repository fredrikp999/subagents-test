import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content, date, slug }) => {
  const formatMarkdown = (text) => {
    return text
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[uh]|<li)(.+)$/gim, '<p>$1</p>')
      .replace(/<p><\/p>/g, '');
  };

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h1 className="blog-post-title">{title}</h1>
        {date && <time className="blog-post-date">{date}</time>}
      </header>
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
      />
    </article>
  );
};

export default BlogPost;