/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";

import img1 from "../../../assets/images/blog/blog-home/img3.jpg";

const BlogComponent = () => {
  return (
    <div>
      <div className="blog-home2 spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">Nos services et traitements</h2>
            </Col>
          </Row>
          <Row className="m-t-40 justify-content-center">
            <Col lg="3" md="4">
              <Card>
                <img className="card-img-top" src={img1} alt="wrappixel kit" />
                <h5 className="font-medium m-t-30">
                  You should have eagle’s eye on new trends and techonogies
                </h5>
              </Card>
            </Col>
            <Col lg="3" md="4">
              <Card>
                <img className="card-img-top" src={img1} alt="wrappixel kit" />
                <h5 className="font-medium m-t-30">
                  You should have eagle’s eye on new trends and techonogies
                </h5>
              </Card>
            </Col>
            <Col lg="3" md="4">
              <Card>
                <img className="card-img-top" src={img1} alt="wrappixel kit" />
                <h5 className="font-medium m-t-30">
                  You should have eagle’s eye on new trends and techonogies
                </h5>
              </Card>
            </Col>
            <Col lg="3" md="4">
              <Card>
                <img className="card-img-top" src={img1} alt="wrappixel kit" />
                <h5 className="font-medium m-t-30">
                  You should have eagle’s eye on new trends and techonogies
                </h5>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;
