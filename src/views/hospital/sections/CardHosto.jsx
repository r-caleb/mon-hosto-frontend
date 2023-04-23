/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CardHosto = ({ hosto, actualPosition, service }) => {
  const [distance, setDistance] = useState(0);
  const [showDistance, setShowDistance] = useState(false);

  const rad = (x) => {
    return (x * Math.PI) / 180;
  };

  const getDistance = (p1, p2) => {
    const R = 3958.8;
    let dLat = rad(p2.lat - p1.lat);
    let dLong = rad(p2.lng - p1.lng);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) *
        Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    console.log(d);
    setDistance(d.toFixed(2));
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

  useEffect(() => {
    getDistance(actualPosition, positionBack);
  }, []);
  return (
    <>
      <Col md="4" onClick={handleClick}>
        <Card className="card-shadow">
          <a className="img-ho">
            <img
              className="card-img-top"
              src={hosto?.values[0]?.picture}
              alt="wrappixel kit"
            />
          </a>
          <CardBody>
            <h5 className="font-medium m-b-0">{hosto?.values[0]?.name}</h5>
            <p className="m-b-0 font-14">{`Ouvert ${hosto?.values[0]?.address}`}</p>
            <p className="m-b-0 font-14 green">{`Ouvert ${hosto?.values[0]?.availability}`}</p>
            {service === "proche" && <p className="font-bold">{distance} km de ta position</p>}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardHosto;