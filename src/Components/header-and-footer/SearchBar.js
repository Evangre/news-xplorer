import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

// SearchBar component
const SearchBar = ({ onSearch }) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for form submission
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
