import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextDatas } from "../pages/Context";

function Header1() {
   const { Products } = useContext(ContextDatas);
    console.log("Products", Products);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <FaShoppingBag className="me-2" />{" "}
            {/* Add some margin for spacing */}
            UrbanCart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link href="#action2"></Nav.Link>

              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/category/electronics">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/jewelery">
                  Jewellery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/women's clothing">
                  Women's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/men's clothing">
                  Men's Clothing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex w-50">
              <div className="input-group">
                <Form.Control
                  type="search"
                  placeholder="Search for Product"
                  className="form-control"
                  aria-label="Search"
                />
                <span className="input-group-text bg-white">
                  <FaSearch />
                </span>
              </div>

           
              <Button variant="outline-success" className="ms-2">
        Search
      </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;






