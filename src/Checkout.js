//import App from "./App";
import React from "react";
import Button from "react-bootstrap/Button";
import "./Checkout.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Checkout = () => {
  return (
    <div
      id="checkout-background"
      className="container-fluid"
      style={{
        backgroundImage:"url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')",
        backgroundSize: 'cover',
        height:"100vh",
      }}
    >
      <div
        id="checkout-box"
        style={{
        //   marginTop: 150,
          width: "50%",
          marginRight: "25%",
          marginLeft: "25%",
        }}
      >
        <Container>
          <Row id="quiz-results">
            <Col>
              <h3>Survey Results</h3>
              <div id="results">
                <ul>
                  <li>Household: 2 people</li>
                  <li>Diet: Omnivore</li>
                  <li>Allergies: Tree Nuts</li>
                  <li>Cuisine: Chinese</li>
                  <li>Kitchen Appliances: Stove</li>
                  <li>Spice: Mild</li>
                  <li>Dislikes: Liver</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row id="suggested-product">
            <Col>
              <p style={{ fontWeight: 200, fontSize: 20, marginBottom: 20 }}>
                Our Silver package is the best fit for your needs:
              </p>
            </Col>
          </Row>
          <Row id="product-offerings">
            <Col>
              {/* Bronze
                        <input type="radio">$50/wk</input> */}
              <Form>
                <Form.Label>Bronze $50</Form.Label>
                <Form.Check type="radio"></Form.Check>
              </Form>
            </Col>
            <Col>
              {/* Silver
                        <input type="radio">$100/wk</input> */}
              <Form>
                <Form.Label>Silver $100/wk</Form.Label>
                <Form.Check type="radio"></Form.Check>
              </Form>
            </Col>
            <Col>
              {/* Gold
                        <input type="radio">$150/wk</input> */}
              <Form>
                <Form.Label>Gold $150/wk</Form.Label>
                <Form.Check type="radio"></Form.Check>
              </Form>
            </Col>
          </Row>
          <Row id="total">
            <p>Total: $100</p>
          </Row>
          <Row id="checkout-button">
            <Button>Checkout</Button>
          </Row>
        </Container>
      </div>
    </div>
  );
};
