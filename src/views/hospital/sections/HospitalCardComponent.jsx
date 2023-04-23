/* eslint-disable */
import React, { useState } from "react";
import { Row, Col, Container, Form, FormGroup, Label } from "reactstrap";

import CardHosto from "./CardHosto";

const HospitalCardComponent = ({ hospitalInfo, actualPosition, treat }) => {
  const [activeElement, setActiveElement] = useState("Tout");
  const [service, setService] = useState("proche");
  const [input, setInput] = useState("");

  const groupObjectByField = (items, field) => {
    const outputs = {};
    items?.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { name: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };

  const handleClick = (value) => {
    setActiveElement(value);
  };
  const infos = hospitalInfo?.filter((hosto) =>
    activeElement !== "Tout" ? hosto.service == activeElement : true
  );
  const infoshosto =
    infos &&
    infos.filter((info) =>
      input ? info.name.toLowerCase().includes(input.toLowerCase()) : true
    );
  //console.log(infos);
  const pocess = groupObjectByField(infoshosto, "name");

  //console.log("infos", pocess);
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
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
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
                    <Label for="exampleSelect" className="title font-bold">
                      Choisissez un filtre{" "}
                    </Label>
                    <select onChange={(text) => setService(text.target.value)}>
                      <option>__ Selectionner __</option>
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
            <Col md="5" className="text-center">
              {service !== "proche" ? (
                <h3 className="title">Les hôpitaux par service</h3>
              ) : (
                <h3 className="title">Les hôpitaux les plus proches</h3>
              )}
            </Col>
            <Col></Col>
          </Row>
          <Row className="m-t-40">
            {pocess &&
              pocess?.map((hosto) => (
                <CardHosto
                  hosto={hosto}
                  actualPosition={actualPosition}
                  service={service}
                />
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HospitalCardComponent;
