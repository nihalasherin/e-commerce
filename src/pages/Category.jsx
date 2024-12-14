import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Category = () => {
    const [Products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
      const fetchproducts = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          
          setProducts(response.data);
        
        } catch (error) {
          console.error("Error product", error);
        }
      };
      fetchproducts();
    }, [category]);

    const navigate = useNavigate(); // React Router v6

    const handleClick = (productId) => {
      navigate(`/singleproduct/${productId}`);  // This will navigate to the product detail page
    };

    const renderStars = (rating) => {
      const fullStars = Math.floor(rating);  // Whole stars
      const halfStars = rating % 1 >= 0.5 ? 1 : 0;  // Half star if there's a decimal part
      const emptyStars = 5 - fullStars - halfStars;  // Remaining empty stars
    
      // Create an array of stars to render
      return (
        <>
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={`full-${index}`} color="#ffb400" />
          ))}
          {[...Array(halfStars)].map((_, index) => (
            <FaStarHalfAlt key={`half-${index}`} color="#ffb400" />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <FaRegStar key={`empty-${index}`} color="#ffb400" />
          ))}
        </>
      );
    };

  return (
    <div
        style={{
          backgroundColor: "#212121",
          minHeight: "100vh",
          color: "#fff",
          padding: "20px 0",
        }}
      >
        <Container>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2.5rem",
              marginBottom: "40px",
            }}
          >
            {category}
          </h1>
          <Row xs={1} md={3} className="g-4">
            {Products.map((Products) => (
              <Col key={Products.id}>
                <Card
                  style={{
                    backgroundColor: "#333",
                    border: "none",
                    color: "#fff",
                    height:"100%"
                  }}
                  onClick={() => handleClick(Products.id)} 
                >
                  <Card.Img
                    variant="top"
                    src={Products.image} // Replace with your image URLs
                    style={{
                      borderRadius: "8px 8px 0 0",
                      objectFit: "cover",
                      height: "200px",
                    }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                   
                    <Card.Title
                      style={{ fontWeight: "bold", fontSize: "1.25rem" }}
                    >
                      {Products?.title}
                    </Card.Title>
                    
                    <h4>£{Products?.price}</h4>
                     <Card.Text style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                                    {/* Display rating stars */}
                                    {renderStars(Products?.rating?.rate)}
                                  </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
       
      </div>
  )
}

export default Category