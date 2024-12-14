import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Singleproduct = () => {
  const { id } = useParams();
  console.log("id......", id);
  const [Products, setProducts] = useState({});  // Initialize as an empty object
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);  // Add id as a dependency to re-fetch if id changes

  console.log("Products", Products);

  const renderStars = (rating) => {
    // Make sure rating is a valid number and within the range 0 to 5
    const validRating = isNaN(rating) ? 0 : Math.max(0, Math.min(5, rating));  // Ensure it's a number between 0 and 5
  
    const fullStars = Math.floor(validRating);  // Whole stars (e.g., 4.2 -> 4)
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;  // Half star if decimal part >= 0.5
    const emptyStars = 5 - fullStars - halfStars;  // Remaining empty stars (should always be >= 0)
  
    // Safeguard to ensure array lengths are non-negative
    return (
      <>
        {[...Array(Math.max(0, fullStars))].map((_, index) => (
          <FaStar key={`full-${index}`} color="#ffb400" />
        ))}
        {[...Array(Math.max(0, halfStars))].map((_, index) => (
          <FaStarHalfAlt key={`half-${index}`} color="#ffb400" />
        ))}
        {[...Array(Math.max(0, emptyStars))].map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="#ffb400" />
        ))}
      </>
    );
  };
  

  return (
    <div style={{ backgroundColor: "#212121", color: "#fff", padding: "20px 0" }}>
      <Container fluid className="d-flex justify-content-center align-items-center">
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
            <Card style={{ width: "100%", backgroundColor: "#333", border: "none", color: "#fff" }}>
              <Card.Img
                variant="top"
                src={Products.image}
                style={{ borderRadius: "8px 8px 0 0", objectFit: "cover", height: "200px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                  {Products.title}
                </Card.Title>
                <Card.Text style={{ fontWeight: "bold", marginTop: "10px" }}>
                  {Products.category}
                </Card.Text>
                <Card.Text style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                  {Products.description}
                </Card.Text>
                <h4>£{Products.price}</h4>
                <Card.Text style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                  {/* Display rating stars */}
                  {renderStars(Products.rating?.rate)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Singleproduct;
