// Sidebar.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import './styles/sidebar.css';
import { BiSolidCategoryAlt } from "react-icons/bi";


const Sidebar = ({ onCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState({
        fruits: false,
        vegetables: false,
    });

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => {
            const updatedCategories = { ...prev, [category]: !prev[category] };
            onCategoryChange(updatedCategories);  // Pass selected categories to parent
            return updatedCategories;
        });
    };

    return (
        <div className="parent-container">
            <div
                className={`sidebar bg-success text-light p-3 ${isOpen ? "sidebar-open" : "sidebar-closed"
                    }`}
                style={{ transition: "width 0.3s ease" }}
            >
                {/* Toggle Button */}
                <Button
                    variant="link"
                    className="text-light toggle-btn p-0"
                    onClick={toggleSidebar}
                    style={{ textDecoration: "none" }}
                >
                    {isOpen ? <div><BiSolidCategoryAlt size={20} className="mx-2" /> Category</div>: <BiSolidCategoryAlt size={20} />}
                </Button>

                {/* Sidebar Content */}
                {isOpen && (
                    <ul className="list-unstyled mt-4">
                        <li className="mb-3">
                            <input
                                type="checkbox"
                                checked={selectedCategories.fruits}
                                onChange={() => handleCategoryChange("fruits")}
                            />
                            <span className="ms-2">Fruits</span>
                        </li>
                        <li className="mb-3">
                            <input
                                type="checkbox"
                                checked={selectedCategories.vegetables}
                                onChange={() => handleCategoryChange("vegetables")}
                            />
                            <span className="ms-2">Vegetables</span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
