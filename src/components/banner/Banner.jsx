import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Une urgence médicale ?</h1>
            <h4 className="subtitle font-light">
              Trouvez un hôpital ouvert et disponible près de chez vous et
              <br /> vérifier les services de santé qui vous conviennent.
            </h4>
            <Link
              to="/find_hospital"
              className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20"
              data-toggle="collapse"
            >
              <span>
                Trouvez un hôpital <i className="ti-arrow-right"></i>
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default HeaderBanner;
