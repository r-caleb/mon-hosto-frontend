import React from "react";
import { Col, Container, Row } from "reactstrap";

const Objectifs = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" className="text-center">
              <h1 className="title font-bold">Objectif de mon hosto</h1>
              <h6 className="subtitle">
                Cette plateforme vous permet d'un côté en cas d'urgence de
                trouver l'hôpital le plus proche de ton emplacement
                géographique, et de l'autre vous pourriez sélectionner l'hôpital
                qui convient à vos attentes de traitements en filtrant la
                recherche par différents traitements employés par cet hôpital.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Objectifs;
