// src/components/Blog.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/posts'); // Assurez-vous d'utiliser le bon endpoint pour récupérer les articles depuis votre backend
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p>Auteur: {article.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
