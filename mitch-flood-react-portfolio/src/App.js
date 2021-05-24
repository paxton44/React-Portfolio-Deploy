import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from './Pages/HomePage'
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";


export default function BasicExample() {
  return (
    <Container fluid>
      <Router>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        
      </Router>
    </Container>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>
      <HomePage /></h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>
        <ContactPage />
      </h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>
        <PortfolioPage />
      </h2>
    </div>
  );
}

