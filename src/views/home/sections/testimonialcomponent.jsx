/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/testimonial/5.jpeg";
import img2 from "../../../assets/images/testimonial/6.jpeg";
import img3 from "../../../assets/images/testimonial/7.jpeg";

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
                    “Cette une application qui m'a beaucoup aidé pour mes choix
                    de traitements dans un hôpital, cette appli m'a aidé a
                    rencontré le meilleur ophtalmogue.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img1} alt="wrapkit" className="circle imageC" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Caleb AKASA</h6>
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
                    “Une appli vraiment intéressante, ça m'a bien été utile pour
                    envoyer un membre de ma famille au bon endroit.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img2} alt="wrapkit" className="circle imageC" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Herman NZA</h6>
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
                    “Une fois de plus cette application m'a aidé dans un moment
                    d'urgence,voire l'hôpital le plus proche de toi est un vrai
                    secours. Merci.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img src={img3} alt="wrapkit" className="circle imageC" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Sophia K</h6>
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
