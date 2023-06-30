import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";

import Container from "../other/Container";
import footerLinks from "../../data/footer-links.json";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";
import FooterSubcribeInput from "./elements/FooterSubcribeInput";

function Footer({ containerFluid, className }) {
  return (
    <div className={`footer -style-one ${classNames(className)}`}>

      <div className="footer-subcribe">
        <Container>
          <Row align="center">
            <Col xs={24} md={14}>
              <div className="footer-subcribe__content">
                <h5>Join Our Newsletter Now</h5>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
              </div>
            </Col>
            <Col xs={24} md={10}>
              <FooterSubcribeInput url="https://lefin.us21.list-manage.com/subscribe/post?u=6f8192b6182b9d53963cea786&amp;id=23a6efe40c&amp;f_id=0023d4e6f0" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2023 Lefin Suitcase - All Rights Reserved.</p>
            <img
              src="/assets/images/footer/logo.png"
              alt="Payment methods"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(Footer);
