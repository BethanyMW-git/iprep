import React from 'react';
import './Homepage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import './media/video-yellow-pepper(2160p).mp4';

export default function Homepage() {

    return (
        <>
            <Container id="section-1" className="header" fluid>
                <Row>
                    <Col>
                        <h2 className="logo">iPrep</h2>
                    </Col>
                    <Col xs={6}></Col>
                    <Col>
                        <button id="login-button" className="btn btn-primary">Login</button>
                        <button id="signup-button" className="btn btn-outline-light">Sign Up</button>
                    </Col>
                </Row>   
            </Container>
     
            <Container id="section-2" fluid>
                <Row>
                    <Col>
                        <div style={{ width:1000, height: "auto", marginTop: 170}}>
                            <Ratio aspectRatio="16x9">
                                <img
                                    alt="blue-counter-img"
                                    type="image/jpeg"
                                    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                                </img>
                            </Ratio>
                        </div>
                         
                        <h1 className="s2-h1">Perfectly curated, easy, and healthy.</h1>
                        <h3 className="s2-h3">Bringing groceries to you based on what you like with recipes so you can prep like a champ.</h3>
                        <Button id="quiz-button" variant="dark" size="sm">Take the quiz</Button> 
                    </Col>
                </Row>
            </Container>

            <Container id="section-3" fluid>
                <Row>
                    <Col>
                        <div style={{ width: 660, height: 'auto'}}>
                            <Ratio aspectRatio="16x9">
                                <embed type="video/mp4" src="https://www.pexels.com/video/person-slicing-a-yellow-bell-pepper-3192257/" autoplay loop />
                                {/* /media/video-yellow-pepper(2160p).mp4 */}
                            </Ratio>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="s3-h3">We make it super easy to turn your grocery list into dinner while saving you time.</h3>
                        <h4 className="s3-h4">Check out our Recipe Catalog now to see how!</h4>
                        <button id="recipes-button">Recipes</button>
                    </Col>
                </Row>
            </Container>

            <Container id="section-4" fluid>
                <Row>
                    <h1 className="s4-h1">Choose your favorites from our huge selection of recipes.</h1>
                    <h3 className="s4-h3">Quick cook time and diet friendly.</h3>
                </Row>
                <Row>
                    <Carousel id="image-carousel-dishes" align="center">
                            <Carousel.Item style={{ width: 217, height: 217}}>
                                <Ratio aspectRatio={1/2}>
                                    <img
                                        className="salad"
                                        src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="dish-1"
                                        rounded
                                    />
                                </Ratio>
                               
                                <Carousel.Caption>
                                    <h3>Salads</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="pastas"
                                    src="https://images.pexels.com/photos/10456299/pexels-photo-10456299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="dish-2"
                                />
                                <Carousel.Caption>
                                    <h3>Pastas</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="mainssides"
                                    src="https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="dish-3"
                                />
                                <Carousel.Caption>
                                    <h3>Mains & Sides</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="sandwiches"
                                    src="https://img.freepik.com/free-photo/top-view-delicious-sandwiches-with-green-salad-ham-tomatoes_140725-29809.jpg?w=1380&t=st=1697242388~exp=1697242988~hmac=da24d8e64b0103d188125e9bc5a064eb5777231b209f2fe19a58744b04f1e9db"
                                    alt="dish-4"
                                />
                                <Carousel.Caption>
                                    <h3>Sandwiches</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="tacos"
                                    src="https://images.pexels.com/photos/4958730/pexels-photo-4958730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="dish-5"
                                />
                                <Carousel.Caption>
                                    <h3>Tacos</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
                    {/* <Stack direction="row" spacing={2} justifyContent="center">
                    
                    <svg id="left-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>

                    <Image alt="salads" src="/media/plate-salad.jpg/" rounded />
                    <Image alt="pastas" src="/media/plate1-pasta.png/" rounded />
                    <Image alt="mains&sides" src="/media/p3.png/" rounded/>
                    <Image alt="sandwiches" src="/media/p4.png/" rounded/>
                    <Image alt="tacos" src="/media/carousel-tacos.jpg/171x180" rounded/>
                    
                    <svg id="right-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>

                </Stack> */}

            <Container id="section-5" fluid>
                <Row>
                    <h1>Ditch the grocery store.</h1>
                    <h3>This is convenience in a box.</h3>
                    <Carousel id="image-carousel-ingredients" align="center"></Carousel>
                </Row>
            </Container>

            <Container id="section-6" fluid>
                <Row>
                    <h2 className="s6-h2">Ready to get started?</h2>
                    <button id="quiz-button">Take the quiz</button>
                </Row>
            </Container>

            <Container id="section-7" fluid>
                <Row>
                    <h1 className="s7-h1">iPrep customers have good things to say:</h1>
                </Row>
                <Row>
                    <Col id="review-1">
                        <Image alt="Hannah" id="hannah-avatar" src="./media/review-hannah.jpg" rounded/>
                        <p>iPrep has changed my life for the better! I can't believe I have only just found it! I will recommend this meal kit company to everyone I know. The meals are so tasty. I was surprised at first, but I'm so glad I tried something new! Love, love, love iPrep!</p>
                        <h3>Hannah B.</h3>
                        <img alt="Hannah's-food" src="./media/review-avocado-toast.jpg"/>
                    </Col>
                    <Col id="review-2">
                        <Image alt="Justin" id="justin-avatar" src="./media/review-justin.jpg"/>
                        <p>I have to say, iPrep turned out to be an extremely convenient tool fo rme as I am usually too busy from work and don't really feel like making anything complicated. The recipes I use from my meal kit are easy and extremely practicaly for what I need.</p>
                        <h3>Justin T.</h3>
                        <img alt="Justin's-food" src="./media/review-meal-prep.jpg"/>
                    </Col>
                    <Col id="review-3">
                        <Image alt="Carlos" id="carlos-avatar" src="./media/review-carlos.jpg"/>
                        <p>Let's GOOOOO!!!!! iPrep is everything they say and more. I started off taking the quiz and ended up with a kit that was able to meet all of my dietary needs. Only tried a couple of recipes so far, but every single one has been delicious, chef-worthy stuff. Definitely coming back to iPrep for more!</p>
                        <h3>Carlos S.</h3>
                        <img alt="Carlos'-food" src="./media/review-salmon.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Accordion>Read More Reviews</Accordion>
                </Row>
            </Container>

            <Navbar id="nav" position="relative">
                <Container id="left-nav">

                    <Navbar.Brand id="home-link" href="#home">iPrep</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"/>

                    <Nav>
                        <Nav.Link id="quiz-link" href="#quiz">quiz</Nav.Link>
                        <Nav.Link id="recipes-link" href="#recipes">recipes</Nav.Link>
                        <Nav.Link id="cart-link" href="#cart">cart</Nav.Link>
                    </Nav>

                </Container>
                <Container id="right-nav">
                    <Nav>
                        <Nav.Link id="contactus-link" href="#contactus">contact us</Nav.Link>
                        <Nav.Link id="faq-link" href="#faq">FAQ</Nav.Link>
                        <Nav.Link id="blog-link" href="#blog">blog</Nav.Link>
                        <Nav.Link id="instagram-link" href="#instagram">instagram</Nav.Link>
                        <Nav.Link id="facebook-link" href="#facebook">facebook</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
};