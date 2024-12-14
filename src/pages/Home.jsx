import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#212121",

          color: "#fff",
          padding: "20px 0",
        }}
      >
        <Container>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {/* First Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/b1.jpg"
                alt="First slide"
                style={{height:"600px"}}
              />
              <Carousel.Caption>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/b2.jpg"
                alt="Second slide"
                style={{height:"600px"}}

              />
              <Carousel.Caption>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/b3.jpg"
                alt="Third slide"
                style={{height:"600px"}}

              />
              <Carousel.Caption>
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <Cards />
    </>
  );
};

export default Home;
