import React from "react";
import Courses from "./Courses";  
import ScrollToTop from "./ScrollToTop";
const coursesPage = () => {
  return (
    <>
    <ScrollToTop />
    <div className="pt-10"> 
      <h1 className="font-dinar text-5xl md:text-6xl text-center font-bold dark:text-white text-black">
        الكورسات
      </h1>
      <Courses />
    </div>
    </>
  );
};

export default coursesPage;
