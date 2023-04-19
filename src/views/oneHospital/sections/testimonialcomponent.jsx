/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/testimonial/1.jpg";
import img2 from "../../../assets/images/testimonial/2.jpg";
import img3 from "../../../assets/images/testimonial/3.jpg";

const TestimonialComponent = () => {
  return (
    <div>
      <div className="testimonial3 spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Ce qu'ils en pensent !</h2>
              
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img1} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Michelle Anderson</h6>
                      <div className="font-10">
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img2} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Mark mesty</h6>
                      <div className="font-10">
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras venene veliel
                    vestibulum.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img3} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Limpsy adam</h6>
                      <div className="font-10">
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-success">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
