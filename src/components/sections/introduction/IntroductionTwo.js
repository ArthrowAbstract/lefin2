import { Col, Row } from "antd";
import React from "react";

import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

function IntroductionTwo() {
  return (
    <div className="introduction-two">
      <Container>
        <div className="introduction-two-wrapper">
          <Row>
            <Col md={12}>
              <div className="introduction-two-image">
                <img
                  src="/assets/images/sections/introduction/two/1.png"
                  alt="introduction-image"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="introduction-two-content">
                <SectionTitle title="Lefin Suitcase" hideDecoration />
                <p>
                  LEFIN Suitcase, a suitcase packed with Legal and financial
                  services.
                  <br /> Here we have experts who deal with your problem and
                  provide you with accurate solutions. From legal consultancy on
                  civil and criminal matters to IPR matters.
                  <br />
                  We are here to guide you, help you and make you aware of your
                  legal and financial rights.
                  <br /> Just connect with us and make your life easy and
                  smooth.
                  <br />
                  <strong> For us, the client is our priority.</strong>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionTwo);
