// Utility to load markdown articles from the public/articles folder

export const loadArticles = async () => {
  try {
    // First, load the manifest to get the list of articles
    const manifestResponse = await fetch('/articles/manifest.json');
    const manifest = await manifestResponse.json();
    
    // Load content for each article
    const articles = await Promise.all(
      manifest.articles.map(async (articleMeta) => {
        try {
          const contentResponse = await fetch(`/articles/${articleMeta.filename}`);
          const content = await contentResponse.text();
          
          return {
            slug: articleMeta.slug,
            title: articleMeta.title,
            date: formatDate(articleMeta.date),
            content: content
          };
        } catch (error) {
          console.error(`Error loading article ${articleMeta.filename}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any articles that failed to load and sort by date
    return articles
      .filter(article => article !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
      
  } catch (error) {
    console.error('Error loading articles manifest:', error);
    return [];
  }
};

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Helper function to get article by slug
export const getArticleBySlug = (articles, slug) => {
  return articles.find(article => article.slug === slug);
};