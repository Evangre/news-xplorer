import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArticleList.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const apiKey = "gVZvmbufpKLfxADwxdxYOBpgEDqGeJxc";
    let url;

    if (category) {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("${category}")&api-key=${apiKey}`;
    } else if (searchTerm) {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`;
    } else {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=news&api-key=${apiKey}`; // Default search term or category
    }

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching articles");
        }
      })
      .then((data) => {
        setArticles(data.response.docs);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [category, searchTerm]);

  return (
    <div className="articleListContainer">
      {error && <p className="error-message">{error}</p>}
      {!error &&
        articles.map((article) => (
          <ArticleCard
            key={article.web_url}
            article={article}
            formatDate={formatDate}
          />
        ))}
    </div>
  );
};

export default ArticleList;
