import React  from 'react'
import { PiUserSoundFill } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { BsSkipStartCircleFill } from "react-icons/bs";
import { BsSkipStartCircle } from "react-icons/bs";
import { MobImage } from '../assets'; 





const MobileSection = () => {

  return (
    <>
    <div className='container mx-auto h-screen mt-8' data-aos = "fade-up"> 
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-28'>

        <div className='relative mt-[8rem] mr-[7rem] md:mt-0 md:mr-[3rem]'>
            <div className='absolute bg-gradient-to-l from-[#11b8f093] to-[#020618] h-[2rem] w-[50rem] mr-[-15rem] rounded-md mt-[5rem]'></div>
            <img src={MobImage} alt="Mobile Image" className='absolute w-[16rem] mt-[-12rem]' />
            <div className='absolute flex gap-2 items-center bg-white text-black px-2 py-1 rounded-md text-md md:text-xl w-fit mt-[-5rem] mr-[-3rem] md:mr-[-5rem] '><BsSkipStartCircle />ابدا الان</div>
            <div className='absolute flex gap-2 items-center bg-white text-black px-2 py-1 rounded-md text-md md:text-xl w-fit mt-[3rem] mr-[14rem]'><PiUserSoundFill />استمتع بكورساتنا</div>
            <div className='absolute flex gap-2 items-center bg-white text-black px-2 py-1 rounded-md text-md md:text-xl w-fit mt-[11rem] mr-[-6rem] md:mr-[-9rem]'><AiFillYoutube />تعلم ذاتي ممتع</div>
        </div>
        <div className='flex flex-col gap-3 mt-[13rem] md:mt-0 md:mr-[3rem]'>
            <h1 className='font-dinar mb-4 text-3xl md:text-4xl'>ابدا , تعلم في اي وقت في اي مكان </h1>
            <p className='flex gap-4 items-center'><span className='text-[#11BAF0] text-2xl'><BsSkipStartCircleFill /></span>ضغطه زر وابدا التعلم ف اي وقت وفي اي مكان </p>
            <p className='flex gap-4 items-center'><span className='text-[#11BAF0] text-2xl'><PiUserSoundFill /></span>بتحب المهام المتعدده ؟ افتح جهازك واستمتع بالاستماع لكورساتنا</p>
            <p className='flex gap-4 items-center'><span className='text-[#11BAF0] text-2xl'><AiFillYoutube /></span>استمتع بالتعلم الذاتي بدون اي ملل </p>
        </div>
        </div>

    </div>
    </>
  )
}

export default MobileSection