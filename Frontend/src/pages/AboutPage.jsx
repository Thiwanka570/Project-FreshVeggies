import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import './styles/about.css'

const AboutPage = () => {
  return (
    <section
      className="about py-5"
      style={{
        height: "auto",
        backgroundImage:
          "url('https://www.pulsetoday.co.uk/wp-content/uploads/2021/07/fruit_veg_nutrition_health_1200-x-800.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent background only for the image
          zIndex: 1,
        }}
      />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="border-section">
          <Row className="text-center mb-4">
            <h2 className="fw-bold mb-4 text-white">About Us</h2>
            <p className="lead text-white">
              At FreshVeggies, we are committed to connecting farmers and
              customers by providing a reliable platform for selling and buying
              fresh vegetables.
            </p>
          </Row>

          {/* Mission Section */}
          <Row className="g-4 mb-5">
            <Col md={6} sm={12}>
              <Card
                className="p-3 shadow border-0"
                style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }} // Dark background for the card
              >
                <Card.Body>
                  <Card.Title className="text-center text-white">Our Mission</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Empower Local Farmers:</strong> Providing fair trade and direct access to customers.
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Promote Healthy Eating:</strong> Offering fresh, organic vegetables for all.
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Encourage Sustainability:</strong> Supporting sustainable farming practices.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Vision Section */}
            <Col md={6} sm={12}>
              <Card
                className="p-3 shadow border-0"
                style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }} // Dark background for the card
              >
                <Card.Body>
                  <Card.Title className="text-center text-white">Our Vision</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Create a Sustainable Ecosystem:</strong> Promote a circular economy in agriculture.
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Bridge the Gap:</strong> Connecting rural farmers with urban consumers.
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0 text-white">
                      <strong>Foster Community Growth:</strong> Supporting local economies and healthy communities.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
