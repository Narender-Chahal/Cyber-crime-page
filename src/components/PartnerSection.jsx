import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import partner_bg from "../assets/img/png/partner_bg.png";
import playbit_img from "../assets/img/png/playbit.png";
import partner_2 from "../assets/img/png/24_img.png";
import partner_3 from "../assets/img/png/partner3.png";
import partner_4 from "../assets/img/png/partner4.png";
function PartnerSection() {
  return (
    <section className="bg-black py-xl-5 pb-5">
      <Container>
        <h2 className="mb-0 fw-bold fs_3xl text-white text-center pb-3 pb-lg-0">
          Part<span className="clr_orange">ners</span>
        </h2>
      </Container>

      <div className="partner_bg_img min_50 py-lg-5 d-flex align-items-center justify-content-center text-center bg_Lg_white">
        <Container className="pt-5 pb-4 pb-2">
          <Row className="py-lg-5 justify-content-center">
            <Col lg={4} sm={6} xs={8}>
              <div className="border1 d-flex align-items-center justify-content-center">
                <img className="w-75" src={playbit_img} alt="playbit_img" />
              </div>
              <p className="mb-0 text-center ff-lato fw-bold fs_sm pt-sm-4 pt-3">
                Playbit
              </p>
            </Col>{" "}
            <Col lg={4} sm={6} xs={8} className="d-lg-none pt-4 pt-sm-0">
              <div className="border2 d-flex align-items-center justify-content-center ">
                <img src={partner_2} alt="partner2" />
              </div>
              <p className="mb-0 text-center ff-lato fw-bold fs_sm pt-sm-4 pt-3">
                24 Capital
              </p>
            </Col>
            <Col lg={8} md={12}>
              <Row className="justify-content-center">
                <Col lg={4} md={4} xs={8} sm={6} className="d-none d-lg-block">
                  <div className="border2 d-flex align-items-center justify-content-center ">
                    <img src={partner_2} alt="partner2" />
                  </div>
                  <p className="mb-0 text-center ff-lato fw-bold fs_sm pt-sm-4 pt-3">
                    24 Capital
                  </p>
                </Col>
                <Col lg={4} sm={6} xs={8} className="pt-4 pt-lg-0">
                  <div className="border2 d-flex align-items-center justify-content-center">
                    <img src={partner_3} alt="partner3" />
                  </div>
                  <p className="mb-0 text-center ff-lato fw-bold fs_sm pt-sm-4 pt-3">
                    TradingHive
                  </p>
                </Col>
                <Col lg={4} sm={6} xs={8} className="pt-4 pt-lg-0">
                  <div className="border2 d-flex align-items-center justify-content-center">
                    <img src={partner_4} alt="partner4" />
                  </div>
                  <p className="mb-0 text-center ff-lato fw-bold fs_sm pt-sm-4 pt-3">
                    Focus Group Equities{" "}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <p className="mb-0 fw-bold fs_sm clr_orange text-center pt-4 pt-lg-0">For business and collaborations, contact us team@cyberdrops.finance</p>
    </section>
  );
}

export default PartnerSection;
