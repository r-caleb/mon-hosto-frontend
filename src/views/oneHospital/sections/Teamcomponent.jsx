/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";

const TeamComponent = ({ oneHospitalInfo }) => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Notre équipe</h1>
              <h6 className="subtitle">
                {oneHospitalInfo[0]?.name} possède une grande équipe composée de
                {oneHospitalInfo[0]?.doctorNumber} medecins.
                <br /> Dont {oneHospitalInfo[0]?.generalistNumber} généralistes
                et {oneHospitalInfo[0]?.specialistNumber} spécialités
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TeamComponent;
