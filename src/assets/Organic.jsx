import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function Organic() {
  return (
    <Container fluid>
      <div className="bgimg text-white">
        <Row className="align-items-center p-4">
          <Col>
            <h3>Natural and Organic</h3>
            <h1 className="display-3 fw-bold">
              Hair <span className="text-dark fw-light">Shampoo</span> For
              Healthy Hair
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius
              natoque penatibus et magnis dis parturient montes.
            </p>
            <Button variant="dark" className="fs-4">
              Shop Now
            </Button>
            <Button variant="outline-dark" className="ms-4 fs-4">
              Contact us
            </Button>
          </Col>
          <Col>
            <img
              src="./img/shampoo.png"
              alt=""
              className="img-fluid mx-auto d-block w-100 image"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Organic;
