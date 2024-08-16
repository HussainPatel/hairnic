import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Products() {
  return (
    <div>
      <Container fluid className="text-center mt-5">
        <h1 className="fw-light">
          Our Natural{" "}
          <span className="fw-bold" style={{ color: "#90bc79" }}>
            Hair Products
          </span>
        </h1>
        <p className="w-50 text-secondary mx-auto s-block mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet,
          erat non malesuada consequat, nibh erat tempus risus.
        </p>
        <Row className="g-4">
          <Col>
            <Card className="p-4">
              <img
                src="./img/product-1.png"
                variant="top"
                className="img-fluid mx-auto d-block w-24 h-75"
              />
              <Card.Body>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (99)
                <Card.Title>Hair Shining Shampoo</Card.Title>
                <Card.Text>
                  <h2 style={{ color: "#90bc79" }}>$99.99</h2>
                </Card.Text>
                <Button className="btn1">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-3">
              <img
                src="./img/product-2.png"
                variant="top"
                className="img-fluid mx-auto d-block w-24 h-75"
              />
              <Card.Body>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (99)
                <Card.Title>Anti-dandruff Shampoo</Card.Title>
                <Card.Text>
                  <h2 style={{ color: "#90bc79" }}>$99.99</h2>
                </Card.Text>
                <Button className="btn1">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4">
              <img
                src="./img/product-1.png"
                variant="top"
                className="img-fluid mx-auto d-block w-24 h-75"
              />
              <Card.Body>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (99)
                <Card.Title>Anti Hairfall Shampoo</Card.Title>
                <Card.Text>
                  <h2 style={{ color: "#90bc79" }}>$99.99</h2>
                </Card.Text>
                <Button className="btn1">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-3">
              <img
                src="./img/product-2.png"
                variant="top"
                className="img-fluid mx-auto d-block w-24 h-75"
              />
              <Card.Body>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (99)
                <Card.Title>Hair Growing Shampoo</Card.Title>
                <Card.Text>
                  <h2 style={{ color: "#90bc79" }}>$99.99</h2>
                </Card.Text>
                <Button className="btn1">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
