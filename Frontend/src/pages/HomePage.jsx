import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaLeaf, FaTractor, FaTruck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './styles/Home.css';
import { FaShoppingCart } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();
  const fruits = [
    { id: 1, name: "Apple", price: "$3/kg", description: "Fresh and sweet", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 2, name: "Banana", price: "$2/kg", description: "Ripe and nutritious", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 3, name: "Orange", price: "$4/kg", description: "Juicy and tangy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 4, name: "Grapes", price: "$5/kg", description: "Sweet and juicy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 5, name: "Mango", price: "$6/kg", description: "Delicious and ripe", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 6, name: "Pineapple", price: "$3.5/kg", description: "Tropical and sweet", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 7, name: "Watermelon", price: "$2.5/kg", description: "Refreshing and juicy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 8, name: "Strawberry", price: "$7/kg", description: "Fresh and tangy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 9, name: "Peach", price: "$4.5/kg", description: "Soft and juicy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 10, name: "Kiwi", price: "$5.5/kg", description: "Exotic and tangy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
  ];

  const vegetables = [
    { id: 1, name: "Tomato", price: "$1.5/kg", description: "Fresh and ripe", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 2, name: "Carrot", price: "$2/kg", description: "Rich in nutrients", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 3, name: "Lettuce", price: "$3.5/kg", description: "Crisp and healthy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 4, name: "Spinach", price: "$2.5/kg", description: "Rich in iron", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 5, name: "Cucumber", price: "$1.2/kg", description: "Fresh and crunchy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 6, name: "Potato", price: "$1.8/kg", description: "Versatile and filling", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 7, name: "Broccoli", price: "$4/kg", description: "High in vitamins", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 8, name: "Cabbage", price: "$2.8/kg", description: "Crisp and healthy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 9, name: "Bell Pepper", price: "$3/kg", description: "Sweet and crunchy", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 10, name: "Zucchini", price: "$3.2/kg", description: "Fresh and nutritious", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
  ];

  const handleOrderClick = (id) => {
    navigate(`/order/${id}`);  // Redirect to order page with item id
  };

  const handleItemPageClick = (cat) => {
    navigate(`/items/${cat}`);  // Redirect to order page with item id
  };


  return (
    <div style={{ height: "auto" }}>
      {/* Hero Section */}
      <section
      className="hero bg-success text-light text-center py-5"
      style={{
        backgroundImage:
          "url('https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg')", // Add your image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Optional: Dark transparent overlay to improve text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay to improve readability
          zIndex: 1,
        }}
      />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <h1 className="fw-bold">Welcome to FreshVeggies</h1>
        <p className="lead">Buy and Sell Fresh Vegetables Online</p>
        <Button href="#register" variant="light" size="lg" className="mt-3">
          Get Started
        </Button>
      </Container>
    </section>

      {/* Features Section */}
      <section className="features py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <FaLeaf size={50} className="text-success mb-3" />
              <h3>Fresh & Organic</h3>
              <p>Get farm-fresh vegetables delivered to your doorstep.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaTractor size={50} className="text-success mb-3" />
              <h3>Sell Your Produce</h3>
              <p>Join us as a seller and connect with customers easily.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaTruck size={50} className="text-success mb-3" />
              <h3>Fast Delivery</h3>
              <p>Enjoy fast and reliable delivery services.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Items Section */}
      <section className="featured-items py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Featured Items</h2>
          <Col>
            {/* Fruits Category */}
            <Col md={12} className="mb-4">
              <h3 onClick={()=>handleItemPageClick('Fruits')}>Fruits</h3>
              <Row>
                {fruits.slice(0, 5).map((item) => (
                  <Col md={4} key={item.id}>
                    <Card className="shadow mb-4">
                      <Row>
                        {/* Text content column */}
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
                          <Card.Body>
                            {/* Title */}
                            <Card.Title>{item.name}</Card.Title>
                            {/* Description */}
                            <Card.Text>{item.description}</Card.Text>
                            {/* Price */}
                            <Card.Text className="fw-bold">{item.price}</Card.Text>
                          </Card.Body>
                        </Col>

                        {/* Image column */}
                        <Col xs={12} md={5} className="p-0">
                          <div className="image-container">
                            {/* Image */}
                            <img
                              src={item.imageUrl} // Replace with the actual image URL or path
                              alt={item.name}
                              className="card-image img-fluid" // Ensures the image is responsive
                            />
                            {/* Order button */}
                            <div className="d-flex justify-content-end">
                              <Button variant="success" className="w-100 my-2" onClick={()=>{handleOrderClick(item.id)}}>
                                <FaShoppingCart className="me-2" /> Order Now
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>


                  </Col>
                ))}
              </Row>
            </Col>

            {/* Vegetables Category */}
            <Col md={12} className="mb-4">
              <h3 onClick={()=>handleItemPageClick('Vegetables')}>Vegetables</h3>
              <Row>
                {vegetables.slice(0, 5).map((item) => (
                  <Col md={4} key={item.id}>
                    <Card className="shadow mb-4">
                      <Row>
                        {/* Text content column */}
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
                          <Card.Body>
                            {/* Title */}
                            <Card.Title>{item.name}</Card.Title>
                            {/* Description */}
                            <Card.Text>{item.description}</Card.Text>
                            {/* Price */}
                            <Card.Text className="fw-bold">{item.price}</Card.Text>
                          </Card.Body>
                        </Col>

                        {/* Image column */}
                        <Col xs={12} md={5} className="p-0">
                          <div className="image-container">
                            {/* Image */}
                            <img
                              src={item.imageUrl} // Replace with the actual image URL or path
                              alt={item.name}
                              className="card-image img-fluid" // Ensures the image is responsive
                            />
                            {/* Order button */}
                            <div className="d-flex justify-content-end">
                              <Button variant="success" className="w-100 my-2" onClick={()=>{handleOrderClick(item.id)}}>
                                <FaShoppingCart className="me-2"  /> Order Now
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
        </Container>
      </section>

      {/* More Items */}
      <section className="more-items py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">More Items</h2>
          <Col>
            {/* Fruits Category */}
            <Col md={12} className="mb-4">
              <h3>Fruits</h3>
              <Row>
                {fruits.slice(5).map((item) => (
                  <Col md={4} key={item.id}>
                    <Card className="shadow mb-4">
                      <Row>
                        {/* Text content column */}
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
                          <Card.Body>
                            {/* Title */}
                            <Card.Title>{item.name}</Card.Title>
                            {/* Description */}
                            <Card.Text>{item.description}</Card.Text>
                            {/* Price */}
                            <Card.Text className="fw-bold">{item.price}</Card.Text>
                          </Card.Body>
                        </Col>

                        {/* Image column */}
                        <Col xs={12} md={5} className="p-0">
                          <div className="image-container">
                            {/* Image */}
                            <img
                              src={item.imageUrl} // Replace with the actual image URL or path
                              alt={item.name}
                              className="card-image img-fluid" // Ensures the image is responsive
                            />
                            {/* Order button */}
                            <div className="d-flex justify-content-end">
                              <Button variant="success" className="w-100 my-2" onClick={()=>{handleOrderClick(item.id)}}>
                                <FaShoppingCart className="me-2" /> Order Now
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Vegetables Category */}
            <Col md={12} className="mb-4">
              <h3>Vegetables</h3>
              <Row>
                {vegetables.slice(5).map((item) => (
                  <Col md={4} key={item.id}>
                    <Card className="shadow mb-4">
                      <Row>
                        {/* Text content column */}
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
                          <Card.Body>
                            {/* Title */}
                            <Card.Title>{item.name}</Card.Title>
                            {/* Description */}
                            <Card.Text>{item.description}</Card.Text>
                            {/* Price */}
                            <Card.Text className="fw-bold">{item.price}</Card.Text>
                          </Card.Body>
                        </Col>

                        {/* Image column */}
                        <Col xs={12} md={5} className="p-0">
                          <div className="image-container">
                            {/* Image */}
                            <img
                              src={item.imageUrl} // Replace with the actual image URL or path
                              alt={item.name}
                              className="card-image img-fluid" // Ensures the image is responsive
                            />
                            {/* Order button */}
                            <div className="d-flex justify-content-end">
                              <Button variant="success" className="w-100 my-2">
                                <FaShoppingCart className="me-2" onClick={handleOrderClick(item.id)} /> Order Now
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
