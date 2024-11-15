import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import './styles/contact.css'

const ContactPage = () => {
  return (
    <section
      className="contact py-5"
      style={{
        height: "auto",
        backgroundImage:
          "url('https://cloudfront-us-east-1.images.arcpublishing.com/coxohio/MDQSCNCXNEHM6AHOGGDK2OUMZI.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden", // Ensures content doesn't overflow the rounded corners
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
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent background
          zIndex: 1,
        }}
      />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="border-contact">
          <h2 className="text-center fw-bold mb-4 text-white">Contact Us</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-white">Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for inputs
                  color: "#333",
                  borderRadius: "10px", // Rounded input fields
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-white">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for inputs
                  color: "#333",
                  borderRadius: "10px", // Rounded input fields
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for textarea
                  color: "#333",
                  borderRadius: "10px", // Rounded input fields
                }}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              style={{
                backgroundColor: "#28a745", // Green background for button
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
