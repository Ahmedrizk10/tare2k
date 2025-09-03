import React from "react";
import Front from "../data/frontend.json";
import { Link } from "react-router-dom";
import CouresCard from "./CouresCard";
import Backend from "../data/backend_node.json";
import Cloud from "../data/cloud_devops.json";
import Cyber from "../data/cyber_security.json";
import Ai from "../data/ai_ml.json";
import Uiux from "../data/uiux_design.json";
import Video from "../data/video_editing.json";
import Soft from "../data/soft_skills.json";
import Business from "../data/business.json";
import Marketing from "../data/digital_marketing.json";
import Mobile from "../data/mobile_development.json";
import Data from "../data/data_analysis.json";
import Game from "../data/game_development.json";
import Graphic from "../data/graphic_design.json";
import ScrollToTop from "./ScrollToTop";
const Courses = () => {
  // لو الملف جاي Array أو Object

  // console.log(Backend.roadmap)
  return (
    <>
    <ScrollToTop />
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CouresCard
          field={Front.field}
          description={Front.description}
          image={Front.image}
          roadmap={Front.roadmap}
        />
        <CouresCard
          field={Backend.field}
          description={Backend.description}
          image={Backend.image}
          roadmap={Backend.roadmap}
        />
        <CouresCard
          field={Cloud.field}
          description={Cloud.description}
          image={Cloud.image}
          roadmap={Cloud.roadmap}
        />
        <CouresCard
          field={Ai.field}
          description={Ai.description}
          image={Ai.image}
          roadmap={Ai.roadmap}
        />
        <CouresCard
          field={Uiux.field}
          description={Uiux.description}
          image={Uiux.image}
          roadmap={Uiux.roadmap}
        />
        <CouresCard
          field={Video.field}
          description={Video.description}
          image={Video.image}
          roadmap={Video.roadmap}
        />
        <CouresCard
          field={Soft.field}
          description={Soft.description}
          image={Soft.image}
          roadmap={Soft.roadmap}
        />
        <CouresCard
          field={Cyber.field}
          description={Cyber.description}
          image={Cyber.image}
          roadmap={Cyber.roadmap}
        />
        <CouresCard
          field={Graphic.field}
          description={Graphic.description}
          image={Graphic.image}
          roadmap={Graphic.roadmap}
        />
        <CouresCard
          field={Business.field}
          description={Business.description}
          image={Business.image}
          roadmap={Business.roadmap}
        />
        <CouresCard
          field={Marketing.field}
          description={Marketing.description}
          image={Marketing.image}
          roadmap={Marketing.roadmap}
        />
        <CouresCard
          field={Mobile.field}
          description={Mobile.description}
          image={Mobile.image}
          roadmap={Mobile.roadmap}
        />
        <CouresCard
          field={Data.field}
          description={Data.description}
          image={Data.image}
          roadmap={Data.roadmap}
        />
        <CouresCard
          field={Game.field}
          description={Game.description}
          image={Game.image}
          roadmap={Game.roadmap}
        />
      </div>
    </>
  );
};

export default Courses;
