import React from "react";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner2 = ({ oneHospitalInfo }) => {
  return (
    <div className="static-slider-head2 banner2">
      <img
        src={oneHospitalInfo?.picture}
        className="hospital_picture"
        alt="hospital logo"
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="subtitle ">{oneHospitalInfo?.name}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner2;
