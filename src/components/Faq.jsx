import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faq_img from "../assets/img/png/faq_perasuit.png";
function Faq() {
  return (
    <section className="bg-black py-5 position-relative">
      {" "}
      <div className="circle_blur position-absolute faq_blur_circle_adjust"></div>
      <div className="position-absolute faq_adjust d-none d-xl-flex">
        <img src={faq_img} alt="faq_img" />
      </div>
      <Container>
        <h2 className="mb-0 ff_lato fw-bold fs_3xl clr_orange  text-center">
          FAQ<span className="text-white">’s</span>{" "}
        </h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-5">
          <Accordion.Item eventKey="0" className="my-4 max_900 mx-auto">
            <Accordion.Header>
              <h6 className="mb-0 ff_lato fw-medium fs_md">
                {" "}
                Egestas scelerisque duis quis aliquet. Consectetur?
              </h6>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 ff_lato fw-normal fs_xsm">
                {" "}
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="my-4 max_900 mx-auto">
            <Accordion.Header>
              <h2 className="mb-0 ff_lato fw-medium fs_md">
                {" "}
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </h2>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 ff_lato fw-normal fs_xsm">
                {" "}
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="my-4 max_900 mx-auto">
            <Accordion.Header>
              <h6 className="mb-0 ff_lato fw-medium fs_md">
                {" "}
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </h6>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 ff_lato fw-normal fs_xsm">
                {" "}
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="my-4 max_900 mx-auto">
            <Accordion.Header>
              <h6 className="mb-0 ff_lato fw-medium fs_md">
                {" "}
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </h6>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 ff_lato fw-normal fs_xsm">
                {" "}
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="my-4 max_900 mx-auto">
            <Accordion.Header>
              <h6 className="mb-0 ff_lato fw-medium fs_md">
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 ff_lato fw-normal fs_xsm">
                {" "}
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default Faq;
