import React from "react";
import ScrollToTop from "./ScrollToTop";

const CouresDetailsCard = ({ roadmap, index }) => {
  const { title, description, link, image } = roadmap;
  return (
    <>
    <ScrollToTop />
      <div>
        <div className="max-w-4xl mx-auto py-8 px-4 dark:bg-slate-950 text-black dark:text-white">
          <div className="space-y-8 relative">
            <div className="relative border border-gray-700 rounded-xl p-5 pt-2 bg-white dark:bg-gray-900 shadow-lg ">

              <span className="absolute -right-5 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </span>
              <div className="flex items-center gap-5">
                <div>
              <img src={image} alt="" className="w-[120px] h-full object-contain rounded-lg" />

                </div>
                <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">
                {title}
              </h3>

              <p className="text-sm leading-relaxed [word-spacing:0.1rem]">{description}</p>

              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-3 py-1 text-sm bg-transparent  border-[#11baf0] border-1 rounded-lg hover:shadow-[0_0_50px_#11b8f0a2] transition-all duration-500">
                  اذهب للكورس
                </button>
              </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouresDetailsCard;
