import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import ScrollToTop from './ScrollToTop'



const Contact = () => {
  return (
    <>
<div className="min-h-screen dark:bg-[#020618] flex items-center justify-center py-16 px-6 ">    
  <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl bg-white/2 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
    <ScrollToTop />
    <div>
      <h2 className="text-4xl font-bold  mb-6 text-[#070B1D] dark:text-white">كن علي تواصل معنا دائما </h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="اسمك "
          className="p-4 rounded-xl bg-[#464e6e36] text-black dark:text-white outline-none border-none focus:outline-[#070B1D] focus:border-[#070B1D] " />
        <input type="email" placeholder="بريدك الالكتروي "
          className="p-4 rounded-xl bg-[#464e6e36] text-black dark:text-white outline-none border-none focus:outline-[#070B1D] focus:border-[#070B1D] " />
        <input type="text" placeholder="الموضوع"
          className="p-4 rounded-xl bg-[#464e6e36] text-black dark:text-white outline-none border-none focus:outline-[#070B1D] focus:border-[#070B1D] " />
        <textarea placeholder="رسالتك ..." rows="5"
          className="p-4 rounded-xl bg-[#464e6e36] text-black dark:text-white outline-none border-none focus:outline-[#070B1D] focus:border-[#070B1D] "></textarea>
        <button className="mt-4 py-3 bg-[#13182d] font-bold text-lg rounded-lg shadow-lg hover:bg-[#3e455d]  transition transform hover:scale-105 duration-500">
          ارسال
        </button>
      </form>
    </div>

    <div className="flex flex-col gap-6 justify-center">
      <h3 className="text-3xl font-bold text-[#070B1D] dark:text-white">معلومات للتواصل</h3>
      <p className="text-gray-400">نحن سعداء بسماعك , اترك لنا رساله او تواصل عبر الارقام </p>
      
      <p className="font-semibold text-[#070B1D] dark:text-white"><FaMapPin className=' text-[#11BAF0]' /> <span className='text-2xl text-[#11BAF0]'>العنوان :</span>  123  القاهرة الجديدة , مصر  </p>
      <p className="font-semibold text-[#070B1D] dark:text-white"><FaPhoneSquareAlt className=' text-[#11BAF0]' /> <span className='text-2xl text-[#11BAF0]'>الهاتف :</span> +2 116514562918</p>
      {/* اواي اخلي السطر دا انجليزي  */}
      <p className="font-semibold  text-[#070B1D] dark:text-white"  lang="en"><MdMarkEmailUnread className=' text-[#11BAF0]' /> <span className='text-2xl text-[#11BAF0]'>البريد الالكتروني :</span><span>info@tarekak.com</span>
</p>
      <div className="flex items-center gap-4 mt-4">
        <a href="https://www.facebook.com/" className='text-5xl dark:text-[#a1a7be] text-[#070B1D]'><IoLogoFacebook /></a> 
        <a href="https://www.linkedin.com/" className='text-4xl dark:text-[#a1a7be] text-[#070B1D]'><BsLinkedin /></a> 
        <a href="https://www.instagram.com/" className='text-5xl dark:text-[#a1a7be] text-[#070B1D]'><AiFillInstagram /></a> 
        <a href="https://x.com/" className='text-4xl dark:text-[#a1a7be] text-[#070B1D]'><FaSquareXTwitter /></a>
      </div>


    </div>

  </div>
</div>



    </>
  )
}

export default Contact