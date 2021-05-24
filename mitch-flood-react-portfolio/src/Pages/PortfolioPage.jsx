import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import PortfolioCard from '../Components/PortfolioCard'




function PortfolioPageCard() {
    return (
      <Container >
        <Header />
        <PortfolioCard />
        
      <Footer />
      </Container>
    );
  }
  
  export default PortfolioPageCard;