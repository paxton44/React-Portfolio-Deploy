import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown'


function HomePage() {
    return (
      <Container >
          <Header />
          <AboutMe />
      
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/DenverHome.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/DenverHome2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/BeerNuts.gif"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Footer />
      </Container>
    );
  }
  
  export default HomePage;