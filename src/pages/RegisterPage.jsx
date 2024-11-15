import React, { useState } from "react";
import { Container, Form, Button, InputGroup, Row, Col, Alert } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa"; // Importing React Icons

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section
      className="register py-5"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://pachamamafoodsng.com/wp-content/uploads/2024/03/Importance-of-Supporting-Local-Farmers-with-Every-Meal_.jpg')",
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
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent background
          zIndex: 1,
        }}
      />
      <Container
        style={{ position: "relative", zIndex: 2 }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="register-form p-5 rounded shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background for form
            borderRadius: "10px",
            width: "100%",
            maxWidth: "500px", // Max width for form
          }}
        >
          <h2 className="text-center fw-bold mb-4">Register</h2>
          
          {/* Validation Alert */}
          {validated && (
            <Alert variant="success" className="text-center">
              Registration Successful! You can now log in.
            </Alert>
          )}
          
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Full Name */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter your name" required />
                <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Email Address */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control type="email" placeholder="Enter your email" required />
                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaPhoneAlt />
                </InputGroup.Text>
                <Form.Control type="tel" placeholder="Enter your phone number" required />
                <Form.Control.Feedback type="invalid">Please provide your phone number.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Create a password" required />
                <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Confirm your password" required />
                <Form.Control.Feedback type="invalid">Please confirm your password.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Address (optional) */}
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address (optional)" />
            </Form.Group>

            {/* Terms & Conditions */}
            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
                required
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            {/* Register Button */}
            <Button
              variant="success"
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#28a745", // Green background for button
                border: "none",
                borderRadius: "10px",
                padding: "10px 0",
              }}
            >
              Register
            </Button>
          </Form>

          {/* Login Link */}
          <div className="text-center mt-3">
            <small>
              Already have an account? <a href="/login">Login here</a>
            </small>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;
