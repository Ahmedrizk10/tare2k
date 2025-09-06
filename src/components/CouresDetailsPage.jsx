import React from "react";
import { useLocation } from "react-router-dom";
import CouresDetailsCard from "./CouresDetailsCard";
import ScrollToTop from "./ScrollToTop";

const CouresDetailsPage = () => {
  const roadmap = useLocation().state.roadmap;
  const field = useLocation().state.field;

  return (
    <>
    <ScrollToTop />
      <div>
        <h2 className="text-xl font-bold text-center text-white  bg-blue-600 py-3  mb-8 ">
          تفاصيل كورس ( {field} )
        </h2>
      </div>
      {roadmap.map((roadmap, index) => {
        return (
          <CouresDetailsCard roadmap={roadmap} index={index} key={index} />
        );
      })}
    </>
  );
};

export default CouresDetailsPage;
