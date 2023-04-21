/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Form, FormGroup, Label, Input } from "reactstrap";

import CardHosto from "./CardHosto";

const HospitalCardComponent = ({ hospitalInfo, actualPosition, treat }) => {
  const [activeElement, setActiveElement] = useState("Tout");
  const [service, setService] = useState("");
  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="6" md="7" className="align-self-center">
                  <h3 className="title font-bold">Trouvez un hôpital</h3>
                  <Form className="m-t-40">
                    <input
                      type="text"
                      name="search"
                      placeholder="écrivez le nom d'un hôptital"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="Recherche"
                      className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-end ">
                  <FormGroup className="form_select">
                    <Label for="exampleSelect">Choisissez un filtre </Label>
                    <select onChange={(text) => setService(text.target.value)}>
                      <option>--</option>
                      <option value="proche">Les plus proches</option>
                      <option value="service">Services</option>
                    </select>
                  </FormGroup>
                </Col>
                <div></div>
              </Row>
              <Row>
                <div className="categoriesBar">
                  {service === "service" &&
                    treat?.map((value, i) => (
                      <span
                        onClick={() => handleClick(value)}
                        key={i}
                        className={activeElement === value ? "active" : ""}
                      >
                        {value}
                      </span>
                    ))}
                </div>
              </Row>
            </Container>
          </div>
        </section>
      </div>
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
