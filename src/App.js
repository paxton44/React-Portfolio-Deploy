//React Imports 
import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
//Bootstrap Imports
import Container from "react-bootstrap/Container";
//Page Component Imports
import HomePage from './Pages/HomePage'
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
//Styling Import
import "./App.css";

//This is what routes the switch statement to change pages without reloading the browser. 
export default function BasicExample() {
  
  return (
    
  

    <Container fluid >
      
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              {/* Here I call the array to be able to use its props in the child component  */}
              <Portfolio  
              />
            </Route>
          </Switch>
        
      </Router>

    </Container>
    
  );
}

// Page Navigation Functionality driven by Switch Statement to display the different page components that have their own components based on page. 
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


