/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/hj.jpg";
import { useNavigate } from "react-router-dom";

const CardHosto = ({ hosto, actualPosition }) => {
  const [distance, setDistance] = useState(0);
  const [showDistance, setShowDistance] = useState(false);

  var rad = function (x) {
    return (x * Math.PI) / 180;
  };

  var getDistance = (p1, p2) => {
    var R = 3958.8; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) *
        Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log(d);
    setDistance(d.toFixed(2)); // returns the distance in meter
  };

  const positionBack = {
    lat: parseFloat(hosto?.values[0]?.latitude),
    lng: parseFloat(hosto?.values[0]?.longitude),
  };
  //console.log("a", positionBack);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/a_hospital/${hosto.values[0]._id}`);
  };
  return (
    <>
      <Col md="4" onClick={handleClick}>
        <Card className="card-shadow">
          <a className="img-ho">
            <img className="card-img-top" src={img1} alt="wrappixel kit" />
          </a>
          <CardBody>
            <h5 className="font-medium m-b-0">{hosto?.values[0]?.name}</h5>
            <p className="m-b-0 font-14">{`Ouvert ${hosto?.values[0]?.availability}`}</p>
            <p>{distance} km de ta position</p>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardHosto;
