import React from "react";
import { useSelector } from "react-redux";
import "../Homepage.css";
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
} from "../redux/userReducer";
import { Logout } from "../components/logout";
import { loggedIn } from "../redux/userReducer";
import { useEffect, useState } from "react";
import RecipeList from "./recipeList";




export const Spoonacular = () => {

  const [searchRecipies, setSearchRecipies] = useState(null);
  const [query, setQuery] = useState("");
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userAccountName = useSelector(selectUserAccountName);

  const dispatch = useDispatch();
  const setUserLoggedIn = (isLoggedIn) => dispatch(loggedIn(isLoggedIn));

  const handleLogout = () => {
    console.log("hey friend you called?");
    setUserLoggedIn(false);
  };



  function getRecipies () {
    fetch(
      //alternate apiKey to use if max call is reached 
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=3140829d85754b778fea173b75dc7939`
    )
    .then((response) => response.json())
    .then((data) => {
      setSearchRecipies(data.results);
    })
    .catch(() => {
      console.log("error");
    });
  }


  function handleChange(e) {
    if ( e.target.value.length >= 3) {
    setQuery(e.target.value);
    } 

  }

  return (

    // <div id="home">
    // <Container id="section-1" className="header" fluid>
    //   <Row>
    //     <Col>
    //       <h2 className="logo">iPrep</h2>
    //     </Col>
    //     <Col xs={6}></Col>

    //     <Col>
    //       {!isUserLoggedIn && (
    //         <>
    //           <Link to="/login">
    //             <button
    //               id="login-button"
    //               className="btn btn-primary"
    //               style={{
    //                 backgroundColor: "#D9ECF2",
    //                 paddingTop: 10,
    //                 paddingLeft: 15,
    //                 paddingRight: 15,
    //                 color: "black",
    //                 marginTop: 60
    //               }}
    //             >
    //               Login
    //             </button>{' '}
    //           </Link>
    //           <Link to="/register">
    //             <button
    //               id="signup-button"
    //               className="btn btn-outline-light"
    //               style={{
    //                 marginTop: 60,
    //               }}
    //             >
    //               Sign Up
    //             </button>{' '}
    //           </Link>
    //         </>
    //       )}
    //       {isUserLoggedIn && (
    //         <h3
    //           className="username"
    //           style={{ color: "#ffffff", marginTop: 30 }}
    //         >
    //           Welcome, {userAccountName}
    //         </h3>
    //       )}

    //       {isUserLoggedIn && <Logout onHandleLogout={handleLogout} />}
    //     </Col>
    //   </Row>
    // </Container>

    <div className="search">
        <input type='text' 
          placeholder="Search (e.g. Salmon)" 
          onChange={handleChange} />
          <button onClick={getRecipies}>Get your recipes</button>
      {searchRecipies && <RecipeList searchRecipies={searchRecipies} />}
    </div>
    // </div>
  );
}

// export default Spoonacular;
