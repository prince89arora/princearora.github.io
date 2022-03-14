import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Introduction } from "../sections";

const PageLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Introduction />
          </Col>
          <Col md="5" lg="6">
            <p>Main section </p>
          </Col>
          <Col>
            <p>Skills section</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageLayout;
