import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from "react-bootstrap/Container";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


function Header() {
  return (
    <Container fluid>
   <h1>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Mitch Flood</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      <NavDropdown title="Portfolio" id="basic-nav-dropdown">
      <NavDropdown.Item href="https://github.com/paxton44">Github Repo</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2"><Link to="/portfolio">Portfolio</Link></NavDropdown.Item>
      <NavDropdown.Item href="/images/MPF Resume 2021.docx.pdf">Resume</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="https://shrouded-reaches-33204.herokuapp.com/">Most Recent App Build</NavDropdown.Item>
      </NavDropdown>
       </Nav>
      </Navbar.Collapse>
      </Navbar>
      </h1>



      </Container>
  );
}



export default Header;