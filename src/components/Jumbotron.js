import React from "react";
import {Col, Row, Container} from "./Grid";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, paddingTop: 10, backgroundColor: "blue", color: "white" }}
    >
      <Container fluid>
        <Row>
          <Col size="md-4 lg-4 sm-4">
            <h2> Guess Placeholder</h2>
          </Col>
          <Col size="md-4 lg-4 sm-4">
            <h2>CLICKY GAME</h2>
          </Col>
          <Col size="md-4 lg-4 sm-4">
            <h2> Score: 0 | Top Score: 12 </h2>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default Jumbotron;