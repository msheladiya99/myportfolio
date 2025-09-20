import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
