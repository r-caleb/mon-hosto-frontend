import React from "react";
import { Row, Col, Container, Form } from "reactstrap";

import banner from "../../../assets/images/form-banners/banner1/banner-img.png";

const FormBannerComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" className="text-center">
              <h1 className="title font-bold">Comment ça marche ?</h1>
              <h6 className="subtitle">ddd</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FormBannerComponent;
