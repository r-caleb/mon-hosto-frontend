/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer bg-dark">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{color:'white'}}>Adresse</h5>
            <p>
              Kobo Hub, Avenue kwango, immeuble 130 B, 5, em niveau, Kinshasa,
              République démocratique du Congo
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{color:'white'}}>Phone</h5>
            <p>
              Téléphone : +243 825 989 080 <br />
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20" style={{color:'white'}}>Email</h5>
            <p>
              <a href="mailto:calebakasa7@gmail.com" className="link"  style={{color:'#8d97ad'}}>
                calebakasa7@gmail.com
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20" style={{color:'white'}}>Social</h5>
            <div className="round-social light">
              <a
                href="https://web.facebook.com/caleb.akasa"
                target="_blank"
                className="link"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/caleb_akasa"
                target="_blank"
                className="link"
              >
                <i className="fa fa-twitter"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UC2xgKoGei5S5Yet39CGPWCg"
                target="_blank"
                className="link"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
              <a
                href="https://www.instagram.com/calebakasa/"
                target="_blank"
                className="link"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  Copyright © 2023 monhosto | Tous droits réservés par R_C.
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <a href="#" className="p-10 p-l-0">
                    Conditions d'utilisation
                  </a>
                  |
                  <a href="#" className="p-10">
                    Mentions légales
                  </a>
                  |
                  <a href="#" className="p-10">
                    Politique de confidentialité
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
