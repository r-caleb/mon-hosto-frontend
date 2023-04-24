/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";

import img1 from "../../../assets/images/blog/blog-home/img3.jpg";
import SkeletonVideo from "../../../components/skeletons/skeletonVideo";
import { useSelector } from "react-redux";

const Services = ({ oneHospitalInfo }) => {
  const { loading } = useSelector((state) => state.pocess);

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
            {!loading
              ? oneHospitalInfo?.map((value, i) => (
                  <Col lg="3" md="4">
                    <Card>
                      <img
                        className="card-img-top"
                        src={value.serviceImage}
                        alt="wrappixel kit"
                      />
                      <h5 className="font-medium m-t-30">{value.service}</h5>
                    </Card>
                  </Col>
                ))
              : [...Array(8)].map(() => (
                  <Col lg="3" md="4">
                    <SkeletonVideo />
                  </Col>
                ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
