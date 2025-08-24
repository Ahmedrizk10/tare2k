import React from 'react'
import { logo } from '../assets/index.js'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
const NavBar = () => {
    const [close, setClose] = useState(false);
    const toggleMenu = () => {
        setClose(!close);
    };
  return (
    <header dir="rtl" className="sticky top-5 left-0 right-0 z-50">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center my-5 backdrop-blur-sm rounded-full z-10 shadow-lg px-7 py-2 text-white">
        
        {/* اللوجو */}
        <div className="logo">
          <img src={logo} alt="الشعار" className="w-30 md:w-40" />
        </div>

        {/* روابط التنقل */}
        <nav>
          <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer hover:text-[#11baf0] transition">الرئيسية</li>
            <li className="cursor-pointer hover:text-[#11baf0] transition">المنتجات</li>
            <li className="cursor-pointer hover:text-[#11baf0] transition">الخدمات</li>
            <li className="cursor-pointer hover:text-[#11baf0] transition">من نحن</li>
            <li className="cursor-pointer hover:text-[#11baf0] transition">تواصل معنا</li>
          </ul>
        </nav>

        {/* الأزرار */}
        <div className="btns hidden md:flex gap-3">
            <button className="bg-[#11baf0] text-white px-5 py-2 rounded-xl hover:shadow-[0_0_50px_#11b8f0a2] transition-all duration-500">
                تسجيل الدخول
            </button>
            <button className="bg-transparent text-white border border-[#11baf0] px-5 py-2 rounded-xl hover:shadow-[0_0_50px_#11b8f0a2] hover:text-white transition-all duration-500">
                إنشاء حساب
            </button>
        </div>

        {/* الأيقونات */}
        <div className="icons md:hidden cursor-pointer" onClick={() => {toggleMenu()}}>
            <TiThMenu size={25} style={{color: "#11baf0"}}  />
        </div>

      </div>
      <div className="md:hidden"
        style={{
            display: close ? "block" : "none",            
            backgroundColor: "#080c14",
            position: "fixed",
            top: "43%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
            padding: "30px 20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            width: "100%",
            maxWidth: "50%",
            textAlign: "center",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.5s ease-in-out",
            animation: "slideIn 0.5s ease-in-out",
            }}>
            <ul className="flex flex-col gap-5">
                <li className="cursor-pointer hover:text-[#11baf0] transition">الرئيسية</li>
                <li className="cursor-pointer hover:text-[#11baf0] transition">المنتجات</li>
                <li className="cursor-pointer hover:text-[#11baf0] transition">الخدمات</li>
                <li className="cursor-pointer hover:text-[#11baf0] transition">من نحن</li>
                <li className="cursor-pointer hover:text-[#11baf0] transition">تواصل معنا</li>
          </ul>
          <div className="btns flex flex-col gap-3 mt-5">
            <button className="bg-[#11baf0] text-white px-5 py-2 rounded-xl hover:shadow-[0_0_50px_#11b8f0a2] transition-all duration-500">
                تسجيل الدخول
            </button>
            <button className="bg-transparent text-white border border-[#11baf0] px-5 py-2 rounded-xl hover:shadow-[0_0_50px_#11b8f0a2] hover:text-white transition-all duration-500">
                إنشاء حساب
            </button>
        </div>

   
        </div>
    </header>
  )
}

export default NavBar
