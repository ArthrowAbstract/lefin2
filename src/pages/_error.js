import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import { Breadcrumb } from "antd";

import LayoutOne from "../components/layout/Layout_error";
import Container from "../components/other/Container";

export default function error() {
  return (
    <LayoutOne title="404 Error">
      <Container>
        <div className="error">
          <Row gutter={50}>
            <Col xs={24} md={12}>
              <div className="error-content">
                <h2>OPPS! THIS PAGE COULD NOT BE FOUND</h2>
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed or name changed
                </p>
                <Button type="primary" shape="round">
                  <Link href="/">
                    Go to homepage
                  </Link>
                </Button>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="error-img">
                <img
                  src="/assets/images/pages/404/1.png"
                  alt="404 Image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}
