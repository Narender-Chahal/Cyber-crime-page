import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import head_img from "../assets/img/png/head.png";
function HeadSection() {
  return (
    <section className="bg-black py-lg-5 pb-3 d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <Container>
        <Row className="align-items-center d-flex flex-column-reverse flex-lg-row text-lg-start text-center">
          <Col lg="6">
            <h2 className="mb-0 ff_lato fw-800 fs_4xl text-white">
              Welcome to <span className="clr_orange">Cyber Drops</span>
            </h2>
            <p className="mb-0 ff_lato fw-normal fs_sm text-white pt-4 pb-5">
              Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
              tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec
              curabitur purus. Ullamcorper mattis risus suspendisse pretium
              tristique.
            </p>
            <button className="button_decoration ff_lato fw-semibold fs_md">
              Explore Now
            </button>
          </Col>
          <Col lg={6} md={6} sm={8} xs={8} className="pb-4 pb-lg-0">
            <div className="justify-content-lg-end d-flex">
              <img className="w_100_lg" src={head_img} alt="head_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeadSection;
