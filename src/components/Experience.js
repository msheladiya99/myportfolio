import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Accountant",
      company: "CA. Lalit Hirpara & Co.",
      duration: "May 2022 - Present",
      description: "Handled accounting, financial reporting, and compliance tasks with accuracy and dedication."
    },
    {
      role: "Cashier",
      company: "Avenue Supermart (DMart)",
      duration: "July 2024 - Aug 2025",
      description: "Managed billing, customer transactions, and cash handling efficiently in a fast-paced retail environment."
    },
    {
      role: "Accountant",
      company: "Patel Perfume",
      duration: "Sep 2025 - Present",
      description: "Currently working on managing accounts, bookkeeping, and financial records for the company."
    }
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">💼 Work Experience</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={4} key={index}>
              <Card className="experience-card">
                <Card.Body>
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2">
                    <small>{exp.duration}</small>
                  </Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
