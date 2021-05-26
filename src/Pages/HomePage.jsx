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
      src="https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/DenverHome.jpg?alt=media&token=26c14ffa-7ea7-4426-a6d6-343d0153f024"
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
      src="https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/DenverHome2.jpg?alt=media&token=94887182-edd1-4ad4-8c7b-e23e8c999f35"
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
      src="https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/BeerNuts.gif?alt=media&token=53fdf7a4-9d43-470b-84ae-6b8dd2f7d15b"
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