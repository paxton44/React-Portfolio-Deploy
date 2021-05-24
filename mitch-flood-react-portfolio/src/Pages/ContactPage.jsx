import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header";
import ContactCard from '../Components/ContactCard';
import Footer from '../Components/Footer';



function ContactPage() {
    return (
      <Container >
        <Container>
        <Header />
        <ContactCard />
        </Container>
        <Footer />
      </Container>
    );
  }
  
  export default ContactPage;