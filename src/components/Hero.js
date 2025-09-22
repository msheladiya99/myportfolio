import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="text-section text-white">
            <h1 className="fw-bold display-5">
            I'm <span className="highlight">Meet Sheladiya</span>
            </h1>
            <h3 className="mt-3">Full-Stack Web Developer</h3>
            <p className="mt-4">
              I build user-friendly, responsive, and scalable web applications
              using React, Node.js, and modern technologies.
            </p>
            <div className="mt-4">
              <Button variant="primary" href="#portfolio" className="me-3">
                View My Work
              </Button>
              <Button variant="outline-light" href="#contact">
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img
              src="https://i.postimg.cc/fymN6kw6/POSTING.png"
              alt="Meet Sheladiya"
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
