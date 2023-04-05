import React from "react";
import { Container } from "react-bootstrap";
import roadmap_img from "../assets/img/png/roadmap.png";
import roadmap1 from "../assets/img/png/roadmap1.png";
import roadmap2 from "../assets/img/png/roadmap2.png";
import roadmap3 from "../assets/img/png/roadmap3.png";
import roadmap4 from "../assets/img/png/roadmap4.png";
import roadmap5 from "../assets/img/png/roadmap5.png";
import roadmap6 from "../assets/img/png/roadmap6.png";
import roadmap7 from "../assets/img/png/roadmap7.png";
import roadmap8 from "../assets/img/png/roadmap8.png";
import rodmap_persuit1 from "../assets/img/png/roadmap_perasuit.png";
import rodmap_persuit2 from "../assets/img/png/roadmap_perasuit2.png";
import rodmap_persuit3 from "../assets/img/png/roadmap_perasuit3.png";
function Roadmap() {
  return (
    <section className="roadmap_bg  bg-black py-xl-5 overflow_y_hidden position-relative">
      <div>
        <img
          className=" position-absolute top_5 end-0 d-none d-xl-flex"
          src={rodmap_persuit1}
          alt="rodmap_persuit1"
        />
      </div>
      <div className="position-absolute top-50 d-none d-xl-flex">
        <img src={rodmap_persuit2} alt="rodmap_persuit2" />
      </div>
      <div className="position-absolute end-0 bottom-0 d-none d-xl-flex">
        <img src={rodmap_persuit3} alt="rodmap_persuit3" />
      </div>
      <Container className="pb-5 pt-lg-5">
        <div className="pb-5 ">
          <h2 className="mb-0 ff_lato fw-bold fs_3xl text-white text-center">
            Road<span className="clr_orange">Map</span>{" "}
          </h2>
        </div>
        <div className=" position-relative ">
          <div className=" d-flex justify-content-sm-center ms-4 ms-sm-0">
            {" "}
            <img className="h-100 " src={roadmap_img} alt="roadmap_img" />
          </div>{" "}
          <div className=" position-absolute roadmap1_adjust">
            <img className="w-100 mw_100" src={roadmap1} alt="roadmap1" />
          </div>
          <div className="position-absolute roadmap1_text_adjust">
            <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
              March 2022
            </h2>
            <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3 max-width">
              1000 Drops Launch on Ethereum
            </p>
          </div>
          <div>
            <div className=" position-absolute roadmap2_adjust">
              <img
                className="w-100 mw_100 d-none d-sm-flex"
                src={roadmap2}
                alt="roadmap2"
              />
              <img
                className="w-100 mw_100 d-sm-none"
                src={roadmap1}
                alt="roadmap1"
              />
            </div>
            <div className="position-absolute roadmap2_text_adjust text-sm-end">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                March 2022
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3 max-width">
                1000 Drops Launch on Ethereum
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap3_adjust">
              <img className="w-100 mw_100" src={roadmap3} alt="roadmap3" />
            </div>
            <div className="position-absolute roadmap3_text_adjust text-start">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                March 2022
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3">
                Creation of Treasury{" "}
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap4_adjust">
              <img
                className="w-100 mw_100 d-none d-sm-flex"
                src={roadmap4}
                alt="roadmap4"
              />{" "}
              <img
                className="w-100 mw_100 d-sm-none"
                src={roadmap1}
                alt="roadmap1"
              />
            </div>
            <div className="position-absolute roadmap4_text_adjust text-sm-end">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                April 2022{" "}
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3">
                Our First Airdrop{" "}
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap5_adjust">
              <img className="w-100 mw_100" src={roadmap5} alt="roadmap5" />
            </div>
            <div className="position-absolute roadmap5_text_adjust ">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                June 2022{" "}
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3">
                Major Collabs{" "}
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap6_adjust">
              <img
                className="w-100 mw_100 d-none d-sm-flex"
                src={roadmap6}
                alt="roadmap6"
              />{" "}
              <img
                className="w-100 mw_100 d-sm-none"
                src={roadmap1}
                alt="roadmap1"
              />
            </div>
            <div className="position-absolute roadmap6_text_adjust text-sm-end">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                Sometime in Q3{" "}
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3 max-width">
                Cyber Celebs come on Ethereum{" "}
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap7_adjust">
              <img className="w-100 mw_100" src={roadmap7} alt="roadmap7" />
            </div>
            <div className="position-absolute roadmap7_text_adjust ">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                Sometime in Q3{" "}
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3 max-width">
                Cyber Celebs come on Ethereum{" "}
              </p>
            </div>
          </div>
          <div>
            <div className=" position-absolute roadmap8_adjust">
              <img
                className="w-100 mw_100 d-none d-sm-flex"
                src={roadmap8}
                alt="roadmap8"
              />
              <img
                className="w-100 mw_100 d-sm-none"
                src={roadmap1}
                alt="roadmap1"
              />
            </div>
            <div className="position-absolute roadmap8_text_adjust text-sm-end">
              <h2 className="ff-semibold ff_lato fs_lg text-white mb-0">
                Sometime in Q4{" "}
              </h2>
              <p className="mb-0 ff_lato fw-normal fs_sxm text-white pt-3">
                Enhanced Partnerships{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Roadmap;
