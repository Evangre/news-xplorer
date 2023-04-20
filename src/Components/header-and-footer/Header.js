import React from "react";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";

// Header component
const Header = ({ onSearch }) => {
  return (
    <Navbar style={{ backgroundColor: "#a2a8d3" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">News Xplorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
          </Nav>
          <SearchBar onSearch={onSearch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
