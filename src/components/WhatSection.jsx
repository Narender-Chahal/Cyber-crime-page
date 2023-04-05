import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import polygon1 from "../assets/img/png/polygon1.png";
import polygon2 from "../assets/img/png/polygo2.png";
import polygon3 from "../assets/img/png/polygon3.png";
import umbrela1 from "../assets/img/png/umb1.png";
function WhatSection() {
  return (
    <section className="bg-black py-5 position-relative">
      <div className="position-absolute end-0 umbrela1_img_adjust d-none d-xl-flex">
        {" "}
        <img src={umbrela1} alt="umbrela1" />{" "}
      </div>{" "}
      <div className="circle_blur position-absolute what_blur_circle_adjust"></div>
      <div className="circle_blur position-absolute what2_blur_circle_adjust"></div>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={6} className="py-4 py-lg-0">
            <Row className="justify-content-start">
              <Col sm={5} xs={5}>
                <img className="w-100" src={polygon1} alt="polygon1" />
              </Col>
              <Col sm={5} xs={5}>
                <img className="w-100" src={polygon1} alt="polygon1" />
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col sm={5} xs={5}>
                <img className="w-100" src={polygon1} alt="polygon1" />
              </Col>
              <Col sm={5} xs={5}>
                <img className="w-100" src={polygon1} alt="polygon1" />
              </Col>
            </Row>
          </Col>
          <Col lg={5} className="text-center text-lg-start pt-3">
            {" "}
            <h2 className="ff_lato fw-bold fs_3xl mb-0 text-white">
              What <span className="clr_orange">we do</span>
            </h2>
            <p className="text-white mb-0 ff_lato fw-normal fs_sm pt-3">
              1000 Cyber Drops will be dropping on Ethereum in March 2022. Each
              and every Cyber Drop is uniquely hand crafted. This is just the
              beginning of our journey. Owning a Cyber Drop will unlock monthly
              airdrops and future governance rights in addition to our
              revolutionary algorithm. We strive to always bring innovation and
              keep BUILDing. Cyber Drops is a community driven project and
              always will be that way. That’s our promise.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatSection;
