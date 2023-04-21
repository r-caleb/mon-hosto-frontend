/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";

import img1 from "../../../assets/images/blog/blog-home/img3.jpg";

const BlogComponent = ({ oneHospitalInfo }) => {
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
            {oneHospitalInfo?.map((value, i) => (
              <Col lg="3" md="4">
                <Card>
                  <img
                    className="card-img-top"
                    src={value.serviceImage}
                    alt="wrappixel kit"
                  />
                  <h5 className="font-medium m-t-30">
                    {value.service}
                  </h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;
