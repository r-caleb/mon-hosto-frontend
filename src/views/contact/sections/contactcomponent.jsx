import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact</h1>
              <h6 className="subtitle">
                Pour plus d'informations ou de précisions sur la plateforme,
                vous pouvez directement nous écrire. Vous pouvez également
                laisser votre avis personnel pour une quelconque amélioration de
                nos services.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Contact rapide</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Votre nom" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="email"
                              name="email"
                              placeholder="Votre email"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="Votre message"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              ENVOYER <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">
                      Coordonnées de <br />
                      mon hosto
                    </h2>
                    <p className="text-white m-t-30 op-8">
                      +243 825 989 080
                      <br /> calebakasa7@gmail.com
                    </p>
                    <p className="text-white op-8">
                      Kobo Hub, Avenue kwango, immeuble 130 B, 5, em niveau,
                      Kinshasa, République démocratique du Congo
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
