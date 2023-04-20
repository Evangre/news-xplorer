import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        name=""
        placeholder="search here..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" style={{ display: "none" }}>
        Search
      </button>
      <FaSearch className="search-icon" />
    </form>
  );
};

export default SearchBar;
