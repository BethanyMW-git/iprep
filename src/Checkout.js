//import App from "./App";
import Button from "react-bootstrap/Button";
import "./Checkout.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
//import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";


export const Checkout = () => {
    return (
        <div 
            id="checkout-background"
            className="bg-image container-fluid"
            style={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')",
                backgroundSize: "cover",
                height: "100vh",
            }} >
        <div
            id="checkout-box"
            style={{
                width: "50%",
                height: "85%",
                marginRight: "25%",
                marginLeft: "25%",
                padding: "5%",
                marginTop: "5%",
                backgroundColor: "black",
                opacity: .8, 
                }}
            className="
                square 
                border 
                border-info 
                border-2
                rounded" 
            >
            <Container fluid>
                <Row id="quiz-results" >
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
                        <p style={{ fontWeight: 200, fontSize: 20, marginBottom: 20 }}>Our Silver package is the best fit for your needs:</p>
                    </Col>
                </Row>
                <Row id="product-offerings">
                    <Col>
                        {/* Bronze
                        <input type="radio">$50/wk</input> */}
                        <Form id="bronze" className="custom-control custom-radio">
                            <Form.Label>Bronze $50</Form.Label>
                            <Form.Check
                                type="radio"
                                id="radio"
                                className="custom-control-input"
                                >
                            </Form.Check>
                        </Form>
                    </Col>
                    <Col>
                        {/* Silver
                        <input type="radio">$100/wk</input> */}
                        <Form id="silver">
                            <Form.Label>Silver $100/wk</Form.Label>
                            <Form.Check type="radio" id="radio"></Form.Check>
                        </Form>
                    </Col>
                    <Col>
                        {/* Gold
                        <input type="radio">$150/wk</input> */}
                        <Form id="gold">
                            <Form.Label>Gold $150/wk</Form.Label>
                            <Form.Check type="radio" id="radio"></Form.Check>
                        </Form>
                    </Col>
                </Row>
                <Row id="total">
                    <p>Total: $100</p>
                </Row>
                <Row id="checkout-button-row">
                    <Button
                        id="checkout-button"
                        variant="info"
                        style={{ backgroundImage:"-moz-linear-gradient(45deg,blue,white)"}}
                    >Checkout</Button>
                </Row>
            </Container>
        </div>
        </div>
    );
};