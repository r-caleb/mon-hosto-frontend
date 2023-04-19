/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/hj.jpg";

const CardHosto = ({ hosto }) => {
  return (
    <>
      <Col md="4">
        <Card className="card-shadow">
          <a href="#" className="img-ho">
            <img className="card-img-top" src={img1} alt="wrappixel kit" />
          </a>
          <CardBody>
            <h5 className="font-medium m-b-0">{hosto?.name}</h5>
            <p className="m-b-0 font-14">{`Ouvert ${hosto.availability}`}</p>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardHosto;
