/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const BannerComponent = ({ oneHospitalInfo }) => {
  return (
    <div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="8">
              <img
                src={oneHospitalInfo[0]?.picture}
                className="rounded img-responsive"
                alt="hospital logo"
              />
            </Col>
            <Col lg="5" md="6" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">{oneHospitalInfo[0]?.name}</h3>
                    <p className="font-bold">Type : {oneHospitalInfo[0]?.type}</p>
                    <p className="font-bold">
                      Contact : {oneHospitalInfo[0]?.phone}
                    </p>
                    <p className="font-bold">
                      Site Web : {oneHospitalInfo[0]?.website}
                    </p>
                    <p className="font-bold">
                      Adresse de l'hôpital : {oneHospitalInfo[0]?.address}
                    </p>
                    <p className="font-bold">
                      Ouvert : {oneHospitalInfo[0]?.availability}
                    </p>
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
