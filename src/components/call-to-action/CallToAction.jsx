import React from "react";
import { Container, Row, Col } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Besoin d'aide ?
                </h2>
                <h6 className="subtitle font-light text-white">
                  Pour plus amples informations concernant vos préoccupations
                  sur la plateforme veuillez nous contacter et vous pouvez
                  laissez un avis
                </h6>
                <a
                  href="/contact_us"
                  className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
