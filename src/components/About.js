import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">Get to know me better</p>
        </div>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0 rounded-4 p-3 about-card">
              <CardContent className="text-center">
                <Avatar
                  sx={{
                    bgcolor: "#0d6efd",
                    width: 80,
                    height: 80,
                    margin: "0 auto 20px auto",
                  }}
                >
                  <PersonIcon fontSize="large" />
                </Avatar>

                <Typography variant="h5" className="fw-bold mb-3">
                  Meet Sheladiya
                </Typography>

                <div className="mb-3">
                  <Typography variant="body1" className="d-flex align-items-center justify-content-center">
                    <PhoneIcon color="primary" className="me-2" /> 9537994439
                  </Typography>
                  <Typography variant="body1" className="d-flex align-items-center justify-content-center">
                    <EmailIcon color="secondary" className="me-2" /> meetjbs@gmail.com
                  </Typography>
                </div>

                <Typography variant="body1" color="textSecondary" className="mt-3">
                  I am a <b>full-stack web developer</b> with expertise in <b>React, Node.js</b>, 
                  and modern web technologies. I enjoy building user-friendly, 
                  responsive, and scalable applications.
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
