import React from 'react';
import './Homepage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
//import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

export default function Homepage() {

    return (
        <>
            <header id="section-1" className="header">
                <div>
                    <h2 className="logo">iPrep</h2>
                    <button id="login-button" className="btn btn-primary">Login</button>
                    <button id="signup-button" className="btn btn-outline-light">Sign Up</button>
                </div>
            </header>

            <div id="section-2"> 
                <h1 align="center" className="s2-h1">Perfectly curated, easy, and healthy.</h1> 
                <h3 align="center" className="s2-h3">Bringing groceries to you based on what you like with recipes so you can prep like a champ.</h3> 
                <button id="quiz-button" align="center" className="quiz-button">Take the quiz</button> 
            </div>

            <div id="section-3">
                <video alt="video-goes-here" src="./public/media/video-yellow-pepper(2160p).mp4"></video>
                <div>
                    <h3 className="s3-h3">We make it super easy to turn your grocery list into dinner while saving you time.</h3>
                    <h4 className="s3-h4">Check out our Recipe Catalog now to see how!</h4>
                    <button id="recipes-button">Recipes</button>
                </div>
            </div>

            <div id="section-4">
                <h1 className="s4-h1">Choose your favorites from our huge selection of recipes.</h1>
                <h3 className="s4-h3">Quick cook time and diet friendly.</h3>
                    
                <Carousel id="image-carousel-dishes" align="center"></Carousel>

                <Stack direction="row" spacing={2} justifyContent="center">
                    
                    <svg id="left-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>

                    <Image alt="salads" src="./media/plate-salad.jpg/171x180" rounded />
                    <Image alt="pastas" src="./media/plate1-pasta.png/171x180" rounded />
                    <Image alt="mains&sides" src="./media/p3.png/171x180" rounded/>
                    <Image alt="sandwiches" src="./media/p4.png/171x180" rounded/>
                    <Image alt="tacos" src="./media/carousel-tacos.jpg/171x180" rounded/>
                    
                    <svg id="right-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>

                </Stack>
            </div>

            <div id="section-5">
                <div>
                    <h1>Ditch the grocery store.</h1>
                    <h3>This is convenience in a box.</h3>
                    <Carousel id="image-carousel-ingredients" align="center"></Carousel>
                </div>
            </div>

            <div id="section-6">
                <div>
                    <h2 className="s6-h2">Ready to get started?</h2>
                    <button id="quiz-button">Take the quiz</button>
                </div>
            </div>

            <div id="section-7">
                <div>
                    <h1 className="s7-h1">iPrep customers have good things to say:</h1>
                    <div id="review-1">
                        <Image alt="Hannah" id="hannah-avatar" src="./media/review-hannah.jpg" rounded/>
                        <p>iPrep has changed my life for the better! I can't believe I have only just found it! I will recommend this meal kit company to everyone I know. The meals are so tasty. I was surprised at first, but I'm so glad I tried something new! Love, love, love iPrep!</p>
                        <h3>Hannah B.</h3>
                        <img alt="Hannah's-food" src="./media/review-avocado-toast.jpg"/>
                    </div>
                    <div id="review-2">
                        <Image alt="Justin" id="justin-avatar" src="./media/review-justin.jpg"/>
                        <p>I have to say, iPrep turned out to be an extremely convenient tool fo rme as I am usually too busy from work and don't really feel like making anything complicated. The recipes I use from my meal kit are easy and extremely practicaly for what I need.</p>
                        <h3>Justin T.</h3>
                        <img alt="Justin's-food" src="./media/review-meal-prep.jpg"/>
                    </div>
                    <div id="review-3">
                        <Image alt="Carlos" id="carlos-avatar" src="./media/review-carlos.jpg"/>
                        <p>Let's GOOOOO!!!!! iPrep is everything they say and more. I started off taking the quiz and ended up with a kit that was able to meet all of my dietary needs. Only tried a couple of recipes so far, but every single one has been delicious, chef-worthy stuff. Definitely coming back to iPrep for more!</p>
                        <h3>Carlos S.</h3>
                        <img alt="Carlos'-food" src="./media/review-salmon.jpg"/>
                    </div>
                    <Accordion>Read More Reviews</Accordion>
                </div>
            </div>

            {/* <Navbar id="nav" position="relative">
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
                        <Nav.Link id="info-link" href="#info">info</Nav.Link>
                        <Nav.Link id="philosophy-link" href="#philosophy">philosophy</Nav.Link>
                        <Nav.Link id="sustainability-link" href="#sustainability">sustainability</Nav.Link>
                        <Nav.Link id="careers-link" href="#careers">careers</Nav.Link>
                        <Nav.Link id="contactus-link" href="#contactus">contact us</Nav.Link>
                        <Nav.Link id="faq-link" href="#faq">FAQ</Nav.Link>
                        <Nav.Link id="community-link" href="#community">community</Nav.Link>
                        <Nav.Link id="blog-link" href="#blog">blog</Nav.Link>
                        <Nav.Link id="instagram-link" href="#instagram">instagram</Nav.Link>
                        <Nav.Link id="tiktok-link" href="#tiktok">tiktok</Nav.Link>
                        <Nav.Link id="facebook-link" href="#facebook">facebook</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    )
};