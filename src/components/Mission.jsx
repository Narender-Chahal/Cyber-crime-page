import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mission from "../assets/img/png/mission_img.png";
function Mission() {
  return (
    <section className="bg-black py-xl-5 py-2 position-relative ">
      {" "}
      <div className="circle_blur position-absolute misson_blur_circle_adjust"></div>
      <div className="circle_blur position-absolute misson2_blur_circle_adjust"></div>
      <Container>
        <Row className="py-5 align-items-center justify-content-center text-center text-lg-start">
          <Col lg={6} md={6} sm={8}xs={8}>
            <div className="d-flex justify-content-start pb-5 pb-lg-0">
              {" "}
              <img className="w_100_lg" src={mission} alt="mission" />
            </div>
          </Col>
          <Col lg={6}>
            <h2 className="mb-0 ff_lato fw-bold fs_4xl text-white">
              Our <span className="clr_orange">Mission</span>
            </h2>
            <p className="mb-0 ff_lato fw-normal fs_sm text-white pt-4 pb-5">
              We understand that one of the biggest concerns for early-stage
              investors is that it can quickly become stressful, overwhelming,
              and especially extremely time consuming. It isn’t easy to balance
              a full time job, family, and an active investment portfolio,
              especially when just starting out.
            </p>
            <button className="button_decoration ff_lato fw-semibold fs_md">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Mission;
