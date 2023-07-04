import { Col, Row } from "antd";
import React from "react";

import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

function Cform() {
  return (
    <div className="introduction-two">
      <Container>
        <div className="introduction-two-wrapper">
          <Row>
            <Col md={12}>
              <div className="introduction-two-image">
                <img
                style={{ width: "500px", height: "1200px", border: "none"}}
                  src="/assets/images/law.png"
                  alt="introduction-image"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="introduction-two-content">
                <SectionTitle title="Our Experts a Call Away" hideDecoration />
                <iframe
  src="https://us21.list-manage.com/contact-form?u=6f8192b6182b9d53963cea786&form_id=af69944ea0dbe46b2d06997363a45484"
  style={{ width: "500px", height: "1200px", border: "none"}} // Set the desired width and height styles here
  alt=""
/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Cform);
