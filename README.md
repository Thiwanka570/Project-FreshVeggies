
# Project: FreshVeggies

## Overview

**FreshVeggies** is an innovative platform designed to empower farmers by enabling them to sell their fresh produce directly to consumers, cutting out the need for middlemen or dealers. This seamless connection between farmers and buyers ensures fair pricing, access to high-quality, fresh produce, and supports sustainable farming practices.

Our mission is to create a more equitable and transparent agricultural ecosystem that benefits both farmers and consumers while promoting healthy eating and sustainability.

## Features

- **Direct Sales**: Farmers can list their fresh produce for sale and connect directly with consumers.
- **Fair Pricing**: By removing middlemen, both farmers and consumers benefit from fair pricing.
- **Secure Transactions**: Safe and secure payment methods for smooth transactions between buyers and sellers.
- **Sustainability**: Promotes organic farming and supports environmentally friendly agricultural practices.
- **User Registration**: Farmers and consumers can create accounts to list items for sale or make purchases.
- **Responsive Design**: The platform is fully responsive, making it easy to access from mobile and desktop devices.

## Technologies Used

- **Frontend**: React.js, CSS, React-Bootstrap
- **Backend**: Spring Boot, MySQL
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token)
- **Payment Gateway**: Stripe or PayPal (if applicable)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   [git clone [https://github.com/Thiwanka570/Project-FreshVeggies.git]
   ```

2. **Set up the Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd fresh-veggies/frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Run the React app:
     ```bash
     npm start
     ```

3. **Set up the Backend**:
   - Clone or download the backend code for **Spring Boot**.
   - Configure the database connection in `src/main/resources/application.properties` with your MySQL credentials.
   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

4. **Access the application**:
   - Frontend: Open your browser and visit [http://localhost:3000](http://localhost:3000)
   - Backend: Visit [http://localhost:8080](http://localhost:8080) for the API.

## Usage

1. **Farmer**: 
   - Register an account and log in to list fresh produce for sale.
   - Set prices, upload product images, and manage inventory.
   - View orders from consumers and manage shipments.

2. **Consumer**: 
   - Browse the listed fresh produce by categories, search for specific items, and place orders directly from farmers.
   - Complete secure transactions using the integrated payment gateway.

## Contributing

We welcome contributions! Feel free to fork the repository, submit issues, or create pull requests. If you are reporting a bug or suggesting a feature, please provide as much detail as possible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


