import React from "react";
import { Button, Row, Col } from "antd";
import Link from "next/link";

import Container from "../../other/Container";
import { formatCurrency } from "../../../common/utils";

function HeroSliderTwo({ containerFluid, data }) {
  return (
    <div className="hero-slider -single -style-two">
      <Container fluid={containerFluid}>
        <div className="hero-slider-wrapper">
          <div className="hero-slider-background">
            <img
              src={data.background}
              alt="Hero slider background image"
            />
          </div>
          <div className="hero-slider-content-wrapper">
            <Row justify="center" align="middle" gutter={30}>
              <Col sm={8}>
                <div className="hero-slider-content">
                  <h5>{data.subTitle}</h5>
                  <h1>{data.title}</h1>
                  <h3>
                    {formatCurrency(data.price.main)}
                    <span>/{data.price.unit}</span>
                  </h3>
                  <Button type="primary" shape="round">
                    <Link href={"/shop/shop-3-column"}>
                        Shop now
                    </Link>
                  </Button>
                </div>
              </Col>
              <Col sm={8}>
                <div className="hero-slider-image">
                  <img
                    src="/assets/images/hero-slider/one/1.png"
                    
                    alt="Hero slider image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="hero-slider-subitems">
          <Row gutter={15}>
            {Array.from(Array(3), (e, i) => {
              return (
                <Col key={i} sm={8} md={12} lg={8}>
                  <Link href="/shop/shop-3-column" className="zoom-in">
               
                      <img
                        src={
                          `/assets/images/hero-slider/two/${i + 1}.png`
                        }
                        alt="Hero slider sub item"
                      />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(HeroSliderTwo);
