import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNavbar from "./components/MyNavbar";
import HeadSection from "./components/HeadSection";
import Mission from "./components/Mission";
import PartnerSection from "./components/PartnerSection";
import Alogo from "./components/Alogo";
import WhatSection from "./components/WhatSection";
import Work from "./components/Work";
import MeetTeam from "./components/MeetTeam";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import FoterSection from "./components/FoterSection";
function App() {
  return (
    <>
      <div className="d-flex flex-column vh_100 ">
        <MyNavbar />
        <HeadSection />
      </div>
      <Mission />
      <PartnerSection />
      <Alogo />
      <WhatSection />
      <Work />
      <MeetTeam />
      <Roadmap />
      <Faq />
      <FoterSection />
    </>
  );
}

export default App;
