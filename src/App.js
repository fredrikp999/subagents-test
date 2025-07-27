import { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import { loadArticles } from './utils/articleLoader';
import './App.css';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all articles from markdown files
    const loadAllArticles = async () => {
      setLoading(true);
      const articles = await loadArticles();
      setBlogPosts(articles);
      setLoading(false);
    };
    
    loadAllArticles();
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Tech Insights</h1>
        <p className="app-subtitle">Exploring the world of technology and innovation</p>
      </header>

      <main className="app-main">
        {loading ? (
          <div className="loading">
            <p>Loading articles...</p>
          </div>
        ) : selectedPost ? (
          <div>
            <button className="back-button" onClick={handleBackToList}>
              ← Back to Articles
            </button>
            <BlogPost 
              title={selectedPost.title}
              content={selectedPost.content}
              date={selectedPost.date}
              slug={selectedPost.slug}
            />
          </div>
        ) : (
          <BlogList posts={blogPosts} onPostSelect={handlePostSelect} />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Tech Insights. Exploring technology one article at a time.</p>
      </footer>
    </div>
  );
}

export default App;