import React from "react";
import { useSelector } from "react-redux";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
//import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
//import "./media/video-yellow-pepper(2160p).mp4";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectIsUserLoggedIn,
  selectUserAccountName,
} from "./redux/userReducer";
import { Logout } from "./components/logout";
import { loggedIn } from "./redux/userReducer";

export default function Homepage() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userAccountName = useSelector(selectUserAccountName);

  const dispatch = useDispatch();
  const setUserLoggedIn = (isLoggedIn) => dispatch(loggedIn(isLoggedIn));

  const handleLogout = () => {
    console.log("hey friend you called?");
    setUserLoggedIn(false);
  };
  return (
    <div id="home">
      <Container id="section-1" className="header" fluid>
        <Row>
          <Col>
            <h2 className="logo">iPrep</h2>
          </Col>
          <Col xs={6}></Col>

          <Col>
            {!isUserLoggedIn && (
              <>
                <Link to="/login">
                  <button
                    id="login-button"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#D9ECF2",
                      paddingTop: 10,
                      paddingLeft: 15,
                      paddingRight: 15,
                      color: "black",
                      marginTop: 60,
                    }}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    id="signup-button"
                    className="btn btn-outline-light"
                    style={{
                      marginTop: 60,
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            {isUserLoggedIn && (
              <h3
                className="username"
                style={{ color: "#ffffff", marginTop: 30 }}
              >
                Welcome, {userAccountName}
              </h3>
            )}

            {isUserLoggedIn && <Logout onHandleLogout={handleLogout} />}
          </Col>
        </Row>
      </Container>

      {/* <Container id="section-2" fluid>
                <Row>
                    <Col>
                        <div style={{ width:1412, height: "auto", marginTop: 170, marginLeft: -12}}>
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
            </Container> */}

      <div className="container" id="section-2">
        {" "}
        This code successfully overlays the text onto the image background, but
        I'm having trouble getting the image to fill the container.
        <div className="row">
          <div className="col">
            <div className="bluebackground">
              <h1 className="s2-h1">Perfectly curated, easy, and healthy.</h1>
              <h3 className="s2-h3">
                Bringing groceries to you based on what you like with recipes so
                you can prep like a champ.
              </h3>
              <Link to="/survey">
                <Button id="quiz-button" variant="dark" size="sm">
                  Take the quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container"> This code doesn't even come close to achieving the desired result.
                <div className="row">
                    <div className="col">
                        <div className="bluebackground">
                            <img alt="bluebg" src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="img-responsive"/>
                            <span className="overlay-text">
                                <h1 className="s2-h1">Perfectly curated, easy, and healthy.</h1>
                                <h3 className="s2-h3">Bringing groceries to you based on what you like with recipes so you can prep like a champ.</h3>
                                <Button id="quiz-button" variant="dark" size="sm">Take the quiz</Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

      <Container id="section-3" fluid>
        <Row className="video-section-row">
          <Col />
          <Col>
            <div
              id="pepper"
              className="embed-responsive embed-responsive-16by9"
            >
              <iframe
                className="embed-responsive-item"
                src="https://player.vimeo.com/video/876059352?badge=0&amp;loop=1&amp;autoplay=1&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allowfullscreen
                title="video (720p)"
              ></iframe>
            </div>
          </Col>
          <Col className="s3-text">
            <h3 className="s3-h3">
              We make it super easy to turn your grocery list into dinner while
              saving you time.
            </h3>
            <h4 className="s3-h4">
              Check out our Recipe Catalog now to see how!
            </h4>
            <Link to="/recipies">
              <Button id="recipes-button" size="sm" variant="dark">
                Recipes
              </Button>
            </Link>
          </Col>
          <Col />
        </Row>
      </Container>

      <Container id="section-4" fluid>
        <Row>
          <h1 className="s4-h1">
            Choose your favorites from our huge selection of recipes.
          </h1>
          <h3 className="s4-h3">Quick cook time and diet friendly.</h3>
        </Row>
        <Row>
          {/* <Carousel id="image-carousel-dishes" align="center">
                            <Carousel.Item>
                                <Ratio aspectRatio="16x9">
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
                </Container> */}

          <Stack direction="row" spacing={2} justifycontent="center" id="stack">
            <Col>
              <svg
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>

              <Image
                alt="salads"
                style={{ width: 217, height: 217 }}
                src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Image
                alt="pastas"
                style={{ width: 217, height: 217 }}
                src="https://images.pexels.com/photos/10456299/pexels-photo-10456299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Image
                alt="mains&sides"
                style={{ width: 217, height: 217 }}
                src="https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Image
                alt="sandwiches"
                style={{ width: 217, height: 217 }}
                src="https://img.freepik.com/free-photo/top-view-delicious-sandwiches-with-green-salad-ham-tomatoes_140725-29809.jpg?w=1380&t=st=1697242388~exp=1697242988~hmac=da24d8e64b0103d188125e9bc5a064eb5777231b209f2fe19a58744b04f1e9db"
                rounded
              />
              <Image
                alt="tacos"
                style={{ width: 217, height: 217 }}
                src="https://images.pexels.com/photos/4958730/pexels-photo-4958730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />

              <svg
                id="right-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Col>
          </Stack>
        </Row>
      </Container>

      <Container id="section-5" fluid>
        <Row>
          <Col>
            <h1>Ditch the grocery store.</h1>
            <h3>This is convenience in a box.</h3>
            {/* <Carousel id="image-carousel-ingredients" align="center"></Carousel> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <svg
              id="left-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <Figure>
              <Figure.Image
                width={217}
                height={278}
                alt="meatandseafood"
                src="https://images.pexels.com/photos/17949898/pexels-photo-17949898/free-photo-of-a-steak-on-a-wooden-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Figure.Caption id="sea-cap" style={{ color: "black" }}>
                Meat & Seafood
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={217}
                height={278}
                alt="freshproduce"
                src="https://images.pexels.com/photos/6608618/pexels-photo-6608618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Figure.Caption id="produce-cap" style={{ color: "black" }}>
                Fresh Produce
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={217}
                height={278}
                alt="bakedgoods"
                src="https://images.pexels.com/photos/6608542/pexels-photo-6608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Figure.Caption id="baked-cap" style={{ color: "black" }}>
                Baked Goods
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={217}
                height={278}
                alt="diaryandeggs"
                src="https://images.pexels.com/photos/7118899/pexels-photo-7118899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Figure.Caption id="dairy-cap" style={{ color: "black" }}>
                Dairy & Eggs
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={217}
                height={278}
                alt="plantbasedprotein"
                src="https://images.pexels.com/photos/9811630/pexels-photo-9811630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                rounded
              />
              <Figure.Caption id="plant-cap" style={{ color: "black" }}>
                Plantbased Protein
              </Figure.Caption>
            </Figure>
            <svg
              id="right-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Col>
        </Row>
      </Container>

      <Container id="section-6" fluid>
        <Row>
          <Col>
            <h2 className="s6-h2">Ready to get started?</h2>
            <Link to="/survey">
              <Button id="quiz-button" size="sm" variant="light">
                Take the quiz
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container id="section-7" fluid>
        <Row>
          <h1 className="s7-h1">iPrep customers have good things to say:</h1>
        </Row>
        <Row>
          <Col id="review-1">
            <Image
              alt="Hannah"
              id="hannah-avatar"
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
            <p>
              iPrep has changed my life for the better! I can't believe I have
              only just found it! I will recommend this meal kit company to
              everyone I know. The meals are so tasty. I was surprised at first,
              but I'm so glad I tried something new! Love, love, love iPrep!
            </p>
            <h3>Hannah B.</h3>
            <Image
              alt="Hannah's-food"
              id="hannahs-food"
              src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
          </Col>
          <Col id="review-2">
            <Image
              alt="Justin"
              id="justin-avatar"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
            <p>
              I have to say, iPrep turned out to be an extremely convenient tool
              for me as I am usually too busy from work and don't really feel
              like making anything complicated. The recipes I use from my meal
              kit are easy and extremely practicaly for what I need.
            </p>
            <h3>Justin T.</h3>
            <Image
              alt="Justin's-food"
              id="justins-food"
              src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
          </Col>
          <Col id="review-3">
            <Image
              alt="Carlos"
              id="carlos-avatar"
              src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
            <p>
              Let's GOOOOO!!!!! iPrep is everything they say and more. I started
              off taking the quiz and ended up with a kit that was able to meet
              all of my dietary needs. Only tried a couple of recipes so far,
              but every single one has been delicious, chef-worthy stuff.
              Definitely coming back to iPrep for more!
            </p>
            <h3>Carlos S.</h3>
            <Image
              alt="Carlos'-food"
              id="carlos-food"
              src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ width: 193 }}
              rounded
            />
          </Col>
        </Row>
        {/* <Row>
                    <Accordion>Read More Reviews</Accordion>
                </Row> */}
      </Container>

      <Navbar id="nav" position="relative">
        <Container className="bottomNavBar">
          <Row className="container-fluid">
            <Col xs={1}>
              <Navbar.Brand id="home-link" href="#home">
                iPrep
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" />
            </Col>
            <Col xs={3}>
              <Nav>
                <Nav.Link href="/survey" id="quiz-link">
                  quiz
                </Nav.Link>

                <Nav.Link href="/recipies" id="recipes-link">
                  recipes
                </Nav.Link>
                <Nav.Link href="/checkout" id="cart-link">
                  checkout
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={2}></Col>
            <Col xs={6}>
              <Nav className="buttom-links-nav">
                <Nav.Link id="contactus-link" href="#contactus">
                  contact us
                </Nav.Link>
                <Nav.Link id="faq-link" href="#faq">
                  FAQ
                </Nav.Link>
                <Nav.Link id="blog-link" href="#blog">
                  blog
                </Nav.Link>
                <Nav.Link id="instagram-link" href="#instagram">
                  instagram
                </Nav.Link>
                <Nav.Link id="facebook-link" href="#facebook">
                  facebook
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
