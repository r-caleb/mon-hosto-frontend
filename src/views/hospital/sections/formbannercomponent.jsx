import React from "react";
import { Row, Col, Container, Form } from "reactstrap";


const FormBannerComponent = () => {
  return (
    <div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="6" md="7" className="align-self-center">
                  <h2 className="title font-bold">Trouvez un hôpital</h2>
                  <Form className="m-t-40">
                    <input
                      type="text"
                      name="search"
                      placeholder="écrivez le nom d'un hôptital"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      value="Recherche"
                      className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto"></Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
