import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import PortfolioCard from '../Components/PortfolioCard'




function PortfolioPageLayout() {
    return (
      <Container >
        <Header />
        
        
            <PortfolioCard />
            

        
        
        
      <Footer />
      </Container>
    );
  }
  
  export default PortfolioPageLayout;