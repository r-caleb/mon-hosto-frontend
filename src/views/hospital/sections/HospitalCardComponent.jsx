/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";
import CardHosto from "./CardHosto";

const HospitalCardComponent = ({ hospitalInfo, actualPosition }) => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Les hôpitaux les plus proches</h2>
            </Col>
            <Col></Col>
          </Row>
          <Row className="m-t-40">
            {hospitalInfo &&
              hospitalInfo?.map((hosto) => (
                <CardHosto hosto={hosto} actualPosition={actualPosition} />
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HospitalCardComponent;
