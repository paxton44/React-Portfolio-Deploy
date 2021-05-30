import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


let portfolioArrayData = [
  {
    projectTitle: "Beer Nuts",
    projectImage: "/images/BeerNuts.gif",
    projectDescription: "This project gives a user the opportunity to discover a new brewery of their liking, with the opportunity to add a place to their favorites or to a wishlist, all of which is tracked through a profile page the user sets up.",
    githubRepoLink: "https://github.com/wylie-u/BeerNuts",
    liveApplicationLink: "https://shrouded-reaches-33204.herokuapp.com/",
  },

  {
    projectTitle: "Read Me Generator",
    projectImage: "/images/ReadMeGenerator.png",
    projectDescription: "My project is designed to help coders write professional read me files with ease. Just run node Read-Me-Generator.",
    githubRepoLink: "https://github.com/paxton44/Read-Me-Generator-",
    liveApplicationLink: "https://paxton44.github.io/Read-Me-Generator-/",
  },

  {
    projectTitle: "Boozy Playlists",
    projectImage: "/images/BoozyPlaylists.png",
    projectDescription: " This project gives a user the opportunity to combine a delicious cocktail with a fun music playlist! The user will have the option to select a cocktail from a dropdown, which will then give them the ingredients need and the directs on how to make the drink, while also loading a playlist for them to listen to.",
    githubRepoLink: "https://github.com/paxton44/teamAwesome",
    liveApplicationLink: "https://paxton44.github.io/teamAwesome/",
  },

  {
    projectTitle: "Password Generator",
    projectImage: "/images/PasswordGenerator.png",
    projectDescription: " This homework assignment required the use of arrays, functions, conditional statements, and the application of a for loop. I first started by constructing arrays for uppercase, lowercase, numerical, and special characters. Then I grouped all four arrays into an empty array named allCharacters. I then modified the writePassword function. This function runs on the parameters of password length being between 8-128 characters. It has conditional statements that prompt and require the user to have at least 8 characters in their password, whether or not they want uppercase, lowercase, special, or numerical characters. It then generates the random password using the for loop to use characters from each array based on the user prompts.",
    githubRepoLink: "https://github.com/paxton44/week-3-hw-fixed",
    liveApplicationLink: "https://paxton44.github.io/week-3-hw-fixed/",
  }
];

console.log(portfolioArrayData);





const PortfolioCard = (props) => {
  
    return( 
      
    <Container>
                <Row>
                  <Col>
                        <Card  style={{ width: 'fluid' }}>
                            <Card.Img variant="top" src='https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/BeerNuts.gif?alt=media&token=53fdf7a4-9d43-470b-84ae-6b8dd2f7d15b' />
                                <Card.Body>
                                    <Card.Title>Beer Nuts</Card.Title>
                                        <Card.Text>
                                        This project gives a user the opportunity to discover a new brewery of their liking, with the opportunity to add a place to their favorites or to a wishlist, all of which is tracked through a profile page the user sets up.  
                                        </Card.Text>
                                                <Button href='https://github.com/wylie-u/BeerNuts' variant="outline-primary">View GitHub Repo</Button>
                                                <Button href='https://shrouded-reaches-33204.herokuapp.com/' variant="outline-danger">View Live Application</Button>
                                    </Card.Body>
                            </Card>

                            <Card  style={{ width: 'fluid' }}>
                            <Card.Img variant="top" src='https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/BoozyPlaylists.png?alt=media&token=8bb47e1f-2d44-4e75-910c-6e3d9299d34a' />
                                <Card.Body>
                                    <Card.Title>Boozy Playlists</Card.Title>
                                        <Card.Text>
                                        This project gives a user the opportunity to discover a new brewery of their liking, with the opportunity to add a place to their favorites or to a wishlist, all of which is tracked through a profile page the user sets up.  
                                        </Card.Text>
                                                <Button href='https://github.com/wylie-u/BeerNuts' variant="outline-primary">View GitHub Repo</Button>
                                                <Button href='https://shrouded-reaches-33204.herokuapp.com/' variant="outline-danger">View Live Application</Button>
                                    </Card.Body>
                            </Card>  

                            <Card  style={{ width: 'fluid' }}>
                            <Card.Img variant="top" src='https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/ReadMeGenerator.png?alt=media&token=2003a6e0-95e5-4f7a-be74-c469099ce2ff' />
                                <Card.Body>
                                    <Card.Title>Read Me Generator</Card.Title>
                                        <Card.Text>
                                        My project is designed to help coders write professional read me files with ease. Just run node Read-Me-Generator.  
                                        </Card.Text>
                                                <Button href='https://github.com/paxton44/Read-Me-Generator-' variant="outline-primary">View GitHub Repo</Button>
                                                <Button href='https://paxton44.github.io/Read-Me-Generator-/' variant="outline-danger">View Live Application</Button>
                                    </Card.Body>
                            </Card>  
                           
                            
                            

                            <Card  style={{ width: 'fluid' }}>
                            <Card.Img variant="top" src='https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/PasswordGenerator.png?alt=media&token=d52e4b78-fe14-4cbd-b93b-9c5fb602ef72' />
                                <Card.Body>
                                    <Card.Title>Password Generator</Card.Title>
                                        <Card.Text>
                                        This homework assignment required the use of arrays, functions, conditional statements, and the application of a for loop. I first started by constructing arrays for uppercase, lowercase, numerical, and special characters. Then I grouped all four arrays into an empty array named allCharacters. I then modified the writePassword function. This function runs on the parameters of password length being between 8-128 characters. It has conditional statements that prompt and require the user to have at least 8 characters in their password, whether or not they want uppercase, lowercase, special, or numerical characters. It then generates the random password using the for loop to use characters from each array based on the user prompts."  
                                        </Card.Text>
                                                <Button id='githubBtn' href='https://github.com/wylie-u/BeerNuts' variant="outline-primary">View GitHub Repo</Button>
                                                <Button href='https://shrouded-reaches-33204.herokuapp.com/' variant="outline-danger">View Live Application</Button>
                                    </Card.Body>
                            </Card> 
                            </Col>  
                     </Row>                    
    </Container>
    
  );







};

export default PortfolioCard;
