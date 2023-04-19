import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import "./ArticleList.css";

const ArticleList = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
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
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.response.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category, searchTerm]);

  return (
    <div className="articleListContainer">
      {articles.map((article) => {
        const imageUrl =
          article.multimedia.length > 0
            ? `https://www.nytimes.com/${article.multimedia[0].url}`
            : null;

        return (
          <Card key={article.web_url} className="cardContainer">
            {imageUrl && <Card.Img variant="top" src={imageUrl} />}
            <Card.Header>{article.headline.main}</Card.Header>
            <Card.Body>
              <Card.Title>{article.snippet}</Card.Title>
              <Card.Text>{article.abstract}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Section: {article.section_name}</ListGroup.Item>
                <ListGroup.Item>
                  Publication Date: {formatDate(article.pub_date)}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default ArticleList;
