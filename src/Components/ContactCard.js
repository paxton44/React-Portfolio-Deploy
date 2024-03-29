import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'

const ContactInfoCard = () => {
  return (
 <Container fluid>
<Card className="text-center" style={{ 
  width: 'fluid'

}}>
  <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/DenverHome2.jpg?alt=media&token=94887182-edd1-4ad4-8c7b-e23e8c999f35" />
  <Card.Body>
    <Card.Title>Contact Information</Card.Title>
    <Card.Text>
    My contact information is listed below! I look forward to hearing from you!
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup>
    <div class="social-information"> <i class="fa fa-map-marker"></i>
    <p>Denver, CO USA</p>
    </div>

    </ListGroup>
    <ListGroup>

    <div class="social-information"> <i class="fa fa-mobile-phone"></i>
    <p>+1-303-819-6097 </p>
    </div>
    </ListGroup>
    <ListGroup>
    <div class="social-information"> <i class="fa fa-envelope-o"></i>
    <p>mitchflood1@gmail.com</p>
    </div>

    </ListGroup>
    <ListGroup>
    <div class="social-media">
    <p>Connect with me :</p>
    <div class="social-icons"> <a href="https://github.com/paxton44"> <i class="fa fa-github"></i> </a> <a href="https://www.linkedin.com/in/mitchell-flood-6a4a5871"> <i class="fa fa-linkedin"></i> </a> </div>
    </div>



    </ListGroup>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/paxton44">Github Repo</Card.Link>
  </Card.Body>
</Card>
</Container>
  );
};

export default ContactInfoCard;