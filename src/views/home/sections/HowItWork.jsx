import React from "react";
import { Row, Container } from "reactstrap";

const HowItWork = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center p-4">
            <h1 className="title font-bold mb-4">Comment ça marche ?</h1>
            <div className="watchScreen__player">
              <iframe
                allowFullScreen
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/gwmJ080d9HE`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube"
              />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HowItWork;
