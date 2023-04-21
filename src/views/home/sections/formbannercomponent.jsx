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
              <div className="video-responsive">
                <iframe
                  width="900"
                  height="480"
                  src={`https://www.youtube.com/embed/gwmJ080d9HE`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FormBannerComponent;
