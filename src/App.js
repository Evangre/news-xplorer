import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header-and-footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/header-and-footer/Footer";
import ArticleList from "./Components/website-content/ArticleList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ArticleList searchTerm={searchTerm} />} />
          <Route
            path="/:category"
            element={<ArticleList searchTerm={searchTerm} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
