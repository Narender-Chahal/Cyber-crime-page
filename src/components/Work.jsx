import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Work() {
  return (
    <section className="bg-black py-lg-5">
      <Container>
        <h2 className="mb-0 ff_lato fw-bold fs_3xl text-white text-center">
          How it <span className="clr_orange">works</span>
        </h2>
        <Row className="pt-lg-5 pt-2 justify-content-center">
          <Col lg={3} md={4} sm={6} className="pt-4">
            <div className="card1 h-100 text-center px-4 py-4   ">
              <div className=" d-flex justify-content-center align-items-center pb-1 ">
                {" "}
                <h2 className="circle d-flex justify-content-center align-items-center ff_lato fw-bold fs_xl mb-0">
                  01
                </h2>
              </div>{" "}``
              <h3 className="mb-0 text-white ff_lato fw-bold fs_md pt-3 mt-1">
                Mint NFT
              </h3>
              <p className="mb-0 fw-normal ff_lato fs_xsm pt-3 pb-4 text-white">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="pt-4">
            <div className="card1 h-100 text-center px-4 py-4   ">
              <div className=" d-flex justify-content-center align-items-center pb-1 ">
                {" "}
                <h2 className="circle d-flex justify-content-center align-items-center ff_lato fw-bold fs_xl mb-0">
                  02
                </h2>
              </div>{" "}
              <h3 className="mb-0 text-white ff_lato fw-bold fs_md pt-3 mt-1">
                Verify NFT Ownership{" "}
              </h3>
              <p className="mb-0 fw-normal ff_lato fs_xsm pt-3 pb-4 text-white">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="pt-4">
            <div className="card3 h-100 text-center px-4 py-4   ">
              <div className=" d-flex justify-content-center align-items-center pb-1 ">
                {" "}
                <h2 className="circle d-flex justify-content-center align-items-center ff_lato fw-bold fs_xl mb-0">
                  03
                </h2>
              </div>{" "}
              <h3 className="mb-0 text-white ff_lato fw-bold fs_md pt-3 mt-1">
                Link API to your account{" "}
              </h3>
              <p className="mb-0 fw-normal ff_lato fs_xsm pt-3 pb-4 text-white">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="pt-4">
            <div className="card3 h-100 text-center px-4 py-4   ">
              <div className=" d-flex justify-content-center align-items-center pb-1 ">
                {" "}
                <h2 className="circle d-flex justify-content-center align-items-center ff_lato fw-bold fs_xl mb-0">
                  04
                </h2>
              </div>{" "}
              <h3 className="mb-0 text-white ff_lato fw-bold fs_md pt-3 mt-1">
                Passive Income for life{" "}
              </h3>
              <p className="mb-0 fw-normal ff_lato fs_xsm pt-3 pb-4 text-white">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
