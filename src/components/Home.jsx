import React from "react";
import { home } from "../assets/index.js";
import { Link } from "react-router-dom";
import Aksam from "./aksam";
import ContactUs from "./ContactUs";
import ScrollToTop from "./ScrollToTop";
const Home = () => {
  
  return (
    <>
    <ScrollToTop />
    <div className="container mx-auto md:w-[1200px] dark:bg-slate-950 dark:text-white text-black ">
      <div className="container mx-auto min-h-screen mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 ">
          <div className="HomeText md:text-right text-center gap-y-2">
            <h1 className="font-dinar text-6xl  md:text-7xl">
              معنا تتحول أحلامك
            </h1>
            <h1 className="font-dinar text-5xl md:text-6xl text-[#11baf0] py-5">
              الى قصة نجاح!
            </h1>
            <p className="font-dinar text-lg md:text-xl py-4">
              طريقك، منصّة تعليمية بتساعدك تتعلم أهم المهارات المطلوبة لسوق
              العمل زي البرمجة، الجرافيك ديزاين، السوفت سكيلز وغيرهم. <br />{" "}
              <span className="text-[#11baf0]">
                معانا، التعلّم أبسط والطريق أوضح.
              </span>{" "}
            </p>
            <div className=" btns grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 md:w-90 w-[90%] mx-auto md:mx-0">
              <Link to="/courses">
                <button className="bg-[#11baf0] text-white px-5 py-3 rounded-xl hover:shadow-[0_0_50px_#11b8f0a2] transition-all duration-500">
                  تصفح الكورسات
                </button>
              </Link>
            </div>
          </div>
          <div className="HomeImage flex justify-center drop-shadow-[0_0_100px_#11b8f0]">
            <img src={home} alt="" className=" " />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
