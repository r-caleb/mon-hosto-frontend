import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner2 = () => {
  return (
    <div className="static-slider-head2 banner2">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title "></h1>
            <h1 className="subtitle ">
              Une recherche responsable,
              <br /><br /> c'est une recherche qui sauve une vie !
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner2;
