import React  from "react";
import { logo } from "../assets/index.js";
import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import ScrollToTop from "./ScrollToTop";

const NavBar = () => {
  const [close, setClose] = useState(false);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setClose(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  const toggleMenu = () => {
    setClose(!close);
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const save = localStorage.getItem("theme");
    if (save === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // (key,value)
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // (key,value)
    }
  };
  return (
    <>
    <ScrollToTop />
    <header dir="rtl" className="sticky top-5 left-0 right-0 z-50 ">
      <div className=" md:w-[1200px] mx-auto  flex justify-between items-center my-5 backdrop-blur-lg rounded-4xl z-10 shadow-lg px-7 py-2 ">
        <div className="logo">
          <img src={logo} alt="الشعار" className="w-30 md:w-40" />
        </div>

        <nav>
          <ul className="hidden md:flex gap-5 font-bold dark:text-white text-black">
            <li                 className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2"
>
              <Link
                to="/"
              >
                الرئيسية
              </Link>
            </li>
            <li                 className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2"
>
              <Link
                to="/courses"
              >
                الكورسات
              </Link>
            </li>
            <li                 className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2"
>
              <Link
                to="/services"
              >
                الخدمات
              </Link>
            </li>
            <li                 className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2"
>
              <Link
                to="/who"
              >
                من نحن
              </Link>
            </li>
            <li                 className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
              <Link
                to="/contact"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-1">
          <div className="btns">
            <Switch toggleDarkMode={toggleDarkMode} />
          </div>

          <div
            className="icons cursor-pointer md:hidden"
            onClick={() => {
              toggleMenu();
            }}
          >
            <TiThMenu size={25} style={{ color: "#11baf0" }} />
          </div>
        </div>
      </div>
      <div
        className="md:hidden"
        style={{
          display: close ? "block" : "none",

          position: "fixed",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "100",
          padding: "30px 20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          width: "100%",
          maxWidth: "80%",
          textAlign: "center",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.5s ease-in-out",
          backdropFilter: "blur(10px)",
        }}
      >
        <ul className="flex flex-col gap-5">
          <li className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
            <Link to="/">الرئيسية</Link>
          </li>
          <li className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
            <Link to="/courses">الكورسات</Link>
          </li>
          <li className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
            <Link to="/couresDetails">الخدمات</Link>
          </li>
          <li className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
            <Link to="/who">من نحن</Link>
          </li>
          <li className="cursor-pointer hover:text-[#11baf0]  transition duration-700 transform hover:scale-110 p-2">
            <Link to="/contact">تواصل معنا</Link>
          </li>
        </ul>
      </div>
    </header>
    </>
  );
};

export default NavBar;
