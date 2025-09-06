import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const CouresCard = ({ field, description, image, roadmap }) => {
  const navigate = useNavigate();
  return (
    <>
    <ScrollToTop />
      <div
        className="card 
        backdrop-blur-lg 
        dark:bg-slate-900 
        dark:text-white
        shadow-xl rounded-2xl 
        flex flex-col 
        overflow-hidden
        transition-all duration-500 
        h-[600px] w-full"
      >
        
        <div className="w-full h-[600px] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={field}
            className="w-full h-full object-fill "
          />
        </div>

        
        <div className="flex flex-col flex-grow items-center text-center p-4">
          <h1 className="font-dinar text-xl md:text-2xl font-bold text-[#11baf0] mt-2">
            {field}
          </h1>

          <p className= " [word-spacing:0.1rem] text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-3 mb-5 px-2 flex-grow overflow-y-auto custom-scrollbar">
            {description}
          </p>

          <div className="mt-auto">
            <button
              onClick={() => {
                navigate("/couresDetailsPage", { state: { roadmap, field } });
              }}
              className="bg-[#11baf0] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_#00bfff] transition-all duration-500"
            >
              مسار التعلم
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouresCard;
