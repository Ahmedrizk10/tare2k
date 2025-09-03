import React from "react";
import { logo } from "../assets/index.js";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
const Footer = () => {
  return (
    <>  
    <ScrollToTop />  
    <footer className=" text-black border-t border-gray-800 pt-4 dark:bg-slate-950 dark:text-gray-400 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <img src={logo} alt="" className="w-32" />
          <p className="mt-3 text-sm leading-relaxed">
            موقع بيعرضلك كورسات وخطط تعليمية بشكل تايم لاين منظم يخليك تمشي خطوة بخطوة.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold dark:text-white text-black mb-3">روابط سريعة</h3>
            <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[#11baf0] transition"><Link to="/" rel="noopener navigate">الرئيسية</Link></li>
                <li className="cursor-pointer hover:text-[#11baf0] transition"><Link to="/courses" rel="noopener navigate">الكورسات</Link></li>
                <li className="cursor-pointer hover:text-[#11baf0] transition"><Link to="/couresDetails" rel="noopener navigate">الخدمات</Link></li>
                <li className="cursor-pointer hover:text-[#11baf0] transition"><Link to="/who" rel="noopener navigate">من نحن</Link></li>
                <li className="cursor-pointer hover:text-[#11baf0] transition"><Link to="/contact" rel="noopener navigate">تواصل معنا</Link></li>
            </ul>
        </div>

        {/* سوشيال ميديا */}
        <div>
          <h3 className="text-xl font-semibold dark:text-white text-black mb-3 ">تابعنا</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener navigate"  className="hover:text-[#11baf0] transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener navigate" className="hover:text-[#11baf0] transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener navigate" className="hover:text-[#11baf0] transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener navigate" className="hover:text-[#11baf0] transition text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* خط تحت */}
      <div className="text-center text-sm text-gray-500 mt-8" dir="ltr">
        © {new Date().getFullYear()} @طريقك، جميع الحقوق محفوظة.
      </div>
    </footer>
    </>
  );
};

export default Footer;
