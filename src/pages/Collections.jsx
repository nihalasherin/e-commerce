
import React, { useContext, useState } from "react";
import { Row, Col, Card, Container, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { ContextDatas } from "./Context";

const Collections = () => {
  const { Products } = useContext(ContextDatas);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter products based on search query
  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (productId) => {
    navigate(`/singleproduct/${productId}`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

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
            fontSize: "3.5rem",
          }}
        >
          Collections
        </h1>
        <div className="d-flex justify-content-end mb-4">
          <Form className="d-flex w-50 m-3">
            <div className="input-group">
              <Form.Control
                type="search"
                placeholder="Search for Product"
                className="form-control"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to the first page when searching
                }}
              />
              <span className="input-group-text bg-white">
                <FaSearch />
              </span>
            </div>
          </Form>
        </div>
        <Row xs={1} md={3} className="g-4">
          {selectedProducts.map((product) => (
            <Col key={product.id}>
              <Card
                style={{
                  backgroundColor: "#333",
                  border: "none",
                  color: "#fff",
                  height: "100%",
                }}
                onClick={() => handleClick(product.id)}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
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
                    {product.title}
                  </Card.Title>
                  <h4>£{product.price}</h4>
                  <Card.Text style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                    {renderStars(product.rating.rate)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-end mt-4">
          <Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePaginationClick(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default Collections;
