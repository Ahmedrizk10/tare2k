import React from 'react'
import { useNavigate } from 'react-router-dom'
const CouresCard = ({field, description , image , roadmap }) => {
const navigate = useNavigate()
  return (
    <>
<div className="card 
  backdrop-blur-lg 
  dark:bg-slate-900 
  dark:text-white 
  shadow-xl rounded-2xl 
  p-6 flex flex-col items-center text-center 
  transition-all duration-500 h-[400px] hover:scale-[1.02]">
  
  {/* صورة الأيقونة */}
  <div className="image w-20 h-20 flex items-center justify-center overflow-hidden rounded-full bg-white/40 dark:bg-white/20 shadow-md">
    <img src={image} alt={field} className="w-12 h-12 object-contain" />
  </div>

  {/* العنوان */}
  <h1 className="font-dinar text-xl md:text-2xl font-bold text-[#11baf0] mt-5">
    {field}
  </h1>

  {/* الوصف */}
  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-3 mb-5 px-2 flex-grow overflow-y-auto custom-scrollbar">
    {description}
  </p>

  {/* الزرار */}
  <div className="mt-auto">
    <button onClick={() => {navigate('/couresDetailsPage', {state: {roadmap,field}})}} className="bg-[#11baf0] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_#00bfff] transition-all duration-500">
      خارطة المسار
    </button>
  </div>
</div>




    </>
  )
}

export default CouresCard