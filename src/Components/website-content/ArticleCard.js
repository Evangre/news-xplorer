import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// ArticleCard component
const ArticleCard = ({ article, formatDate }) => {
  // Get the image URL if available
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
        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
