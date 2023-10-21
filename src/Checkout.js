//import App from "./App";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


export const Checkout = () => {
    return (
        <div id="checkout-box">
            <Container>
                <Row id="quiz-results">
                    <Col>
                        <h3>Quiz Results</h3>
                        <ul>
                            <li>Omnivore</li>
                            <li>2 person household</li>
                            <li>Chinese cuisine</li>
                            <li>nut allergy</li>
                        </ul>
                    </Col>
                </Row>
                <Row id="suggested-product">
                    <Col>
                        <p>Our Silver package is the best fit for your needs:</p>
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
        
    );
};