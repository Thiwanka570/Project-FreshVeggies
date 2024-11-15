import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const allItems = [
    { id: 1, name: "Tomatoes", price: "$2/kg", description: "Fresh and organic", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 2, name: "Potatoes", price: "$1.5/kg", description: "Hand-picked quality", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 3, name: "Carrots", price: "$3/kg", description: "Rich in nutrients", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 4, name: "Apples", price: "$4/kg", description: "Crisp and sweet", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 5, name: "Bananas", price: "$1/kg", description: "Rich in potassium", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 6, name: "Oranges", price: "$3.5/kg", description: "Citrus goodness", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 7, name: "Grapes", price: "$5/kg", description: "Sweet and juicy", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 8, name: "Mango", price: "$6/kg", description: "Delicious and ripe", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 9, name: "Pineapple", price: "$3.5/kg", description: "Tropical and sweet", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 10, name: "Watermelon", price: "$2.5/kg", description: "Refreshing and juicy", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 11, name: "Strawberry", price: "$7/kg", description: "Fresh and tangy", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 12, name: "Peach", price: "$4.5/kg", description: "Soft and juicy", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 13, name: "Kiwi", price: "$5.5/kg", description: "Exotic and tangy", category: "fruits", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 14, name: "Tomato", price: "$1.5/kg", description: "Fresh and ripe", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 15, name: "Carrot", price: "$2/kg", description: "Rich in nutrients", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 16, name: "Lettuce", price: "$3.5/kg", description: "Crisp and healthy", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 17, name: "Spinach", price: "$2.5/kg", description: "Rich in iron", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 18, name: "Cucumber", price: "$1.2/kg", description: "Fresh and crunchy", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 19, name: "Potato", price: "$1.8/kg", description: "Versatile and filling", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 20, name: "Broccoli", price: "$4/kg", description: "High in vitamins", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 21, name: "Cabbage", price: "$2.8/kg", description: "Crisp and healthy", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 22, name: "Bell Pepper", price: "$3/kg", description: "Sweet and crunchy", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
    { id: 23, name: "Zucchini", price: "$3.2/kg", description: "Fresh and nutritious", category: "vegetables", imageUrl: "https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=" },
  ];

  const item = allItems.find(item => item.id === parseInt(itemId));

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    quantity: 1,
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.quantity) {
      alert("All fields are required!");
      return;
    }

    setOrderSuccess(true);
    // Optionally navigate to a confirmation page or clear the form
    setTimeout(() => {
      setOrderSuccess(false);
      navigate("/"); // Redirect to homepage or orders page
    }, 2000);
  };

  if (!item) {
    return <Alert variant="danger">Item not found!</Alert>;
  }

  return (
    <section className="order py-5" style={{ height: '100vh' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4">Order {item.name}</h2>
        {orderSuccess && <Alert variant="success">Order placed successfully!</Alert>}
        
        <div className="text-center mb-4">
          <img src={item.imageUrl} alt={item.name} style={{ width: "200px", height: "auto" }} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p><strong>{item.price}</strong></p>
        </div>

        <Form onSubmit={handleOrderSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formQuantity">
            <Form.Label>Quantity (kg)</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              min="1"
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Place Order
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default OrderPage;
