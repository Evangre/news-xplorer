import React from "react";
import { Navbar, Container } from "react-bootstrap";

// Footer component
const Footer = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Navbar.Text style={{ textAlign: "center", width: "100%" }}>
          © News Xplorer. All rights reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
