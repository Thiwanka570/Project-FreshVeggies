import React, { useState } from "react";
import { Container, Form, Button, InputGroup, Alert } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importing React Icons

const LoginPage = () => {
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
      className="login py-5"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://media.licdn.com/dms/image/C4D12AQFYbFl6QULfkQ/article-cover_image-shrink_720_1280/0/1530453470727?e=2147483647&v=beta&t=ofL9N6PqPi125qiJ1EgZjjWI4xU_lnsJ4TWUNX62tGU')",
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
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div
          className="login-form p-5 rounded shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background for form
            borderRadius: "10px",
            maxWidth: "400px", // Max width for form
            margin: "0 auto", // Centering the form
          }}
        >
          <h2 className="text-center fw-bold mb-4">Login</h2>

          {/* Validation Alert */}
          {validated && (
            <Alert variant="success" className="text-center">
              Login Successful!
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Login Button */}
            <Button
              variant="success"
              type="submit"
              style={{
                backgroundColor: "#28a745", // Green background for button
                border: "none",
                borderRadius: "10px",
                padding: "10px 0",
                width: "100%",
              }}
            >
              Login
            </Button>

            {/* Forgot Password Link */}
            <div className="text-center mt-3">
              <small>
                <a href="/forgot-password" style={{ color: "#007bff" }}>
                  Forgot Password?
                </a>
              </small>
            </div>

            {/* Register Link */}
            <div className="text-center mt-3">
              <small>
                Don't have an account?{" "}
                <a href="/register" style={{ color: "#007bff" }}>
                  Register here
                </a>
              </small>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
