// ItemPage.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Sidebar from "../component/Sidebar";
import './styles/ItemPage.css'
import { FaShoppingCart } from 'react-icons/fa'; 


// Sample data
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



const ItemPage = () => {
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Handle category filter change
  const handleCategoryChange = (selectedCategories) => {
    let filtered = allItems;
    if (selectedCategories.fruits && selectedCategories.vegetables) {
      filtered = allItems;  // Show all items if both categories are selected
    } else if (selectedCategories.fruits) {
      filtered = allItems.filter(item => item.category === "fruits");
    } else if (selectedCategories.vegetables) {
      filtered = allItems.filter(item => item.category === "vegetables");
    } else {
      filtered = allItems;  // No category selected, no items to show
    }
    setFilteredItems(filtered);
  };

  return (
    <div className="d-flex" style={{ height: 'auto' }}>
      {/* Sidebar */}
      <Sidebar onCategoryChange={handleCategoryChange} />

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <Container>
          <h2 className="text-center fw-bold mb-4">Available Items</h2>
          <Row>
            {filteredItems.map((item) => (
              <Col md={4} key={item.id} className="mb-3">
                <Card className="shadow mb-4">
                  <Row>
                    {/* Text content column */}
                    <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text className="fw-bold">{item.price}</Card.Text>
                        
                      </Card.Body>
                    </Col>

                    {/* Image column */}
                    <Col xs={12} md={5} className="p-0 ">
                      <div className="image-container">
                        <img
                          src={item.imageUrl} // Replace with the actual image URL or path
                          alt={item.name}
                          className="card-image img-fluid" // Ensures the image is responsive
                        />
                        <div className="d-flex justify-content-end"><Button variant="success" className="w-100 my-2"> <FaShoppingCart className="me-2" /> Order Now </Button></div>
                      </div>
                      
                    </Col>
                  </Row>
                </Card>






              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ItemPage;
