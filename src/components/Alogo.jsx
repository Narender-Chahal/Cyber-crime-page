import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import algo1 from "../assets/img/png/algo1.png";
import algo2 from "../assets/img/png/algo2.png";
import algo3 from "../assets/img/png/algo3.png";
function Alogo() {
  return (
    <section className="bg-black pt-xl-5 pb-lg-5">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row justify-content-center">
          <Col lg={6}  className="pt-5 text-center text-lg-start">
            <h2 className="ff_lato fw-bold fs_3xl mb-0 text-white">
              Our <span className="clr_orange">Algo</span>
            </h2>
            <p className="text-white mb-0 ff_lato fw-normal fs_sm pt-3">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>
          <Col
            lg={6} sm={8} xs={10}
            className="justify-content-lg-end  justify-content-center d-flex pt-lg-5 "
          >
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <div className="algo_border p-2">
                  <img className="w-100" src={algo1} alt="algo1" />
                </div>
                <div className="algo_border p-2 mt-3">
                  {" "}
                  <img className="w-100" src={algo2} alt="algo2" />
                </div>{" "}
              </div>
              <div className="algo_border p-2 ms-4">
                <img className="w-100" src={algo3} alt="algo3" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Alogo;
