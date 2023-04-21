/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/hj.jpg";

const BannerComponent = ({ oneHospitalInfo }) => {
  return (
    <div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <img
                src={img1}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">{oneHospitalInfo?.name}</h3>
                    <p>Ville : {oneHospitalInfo?.townID?.name}</p>
                    <p>Type : {oneHospitalInfo?.type}</p>
                    <p>Contact : {oneHospitalInfo?.phone}</p>
                    <p>Site Web : {oneHospitalInfo?.website}</p>
                    <p>Adresse de l'hôpital : {oneHospitalInfo?.address}</p>
                    <p>Ouvert : {oneHospitalInfo?.availability}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
