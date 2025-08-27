import React from 'react'

const CouresDetailsCard = ({roadmap , index}) => {
  const {title , description , link , image} = roadmap
  return (
    <>

      <div>
        <div className="max-w-4xl mx-auto py-10 px-4">
        <img src={image} alt="" />

      {/* الكروت */}
      <div className="space-y-8 relative">
        <div className="relative border border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-lg ">
            {/* الرقم على اليمين */}
            <span className="absolute -right-5 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                {index+1}
            </span>

            {/* العنوان */}
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {title}
            </h3>

            {/* الوصف */}
            <p className="text-gray-300 text-sm leading-relaxed">
                {description}
            </p>

            {/* التاج */}
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-3 py-1 text-sm bg-transparent text-white border-[#11baf0] border-1 rounded-lg hover:shadow-[0_0_20px_#00bfff] transition-all duration-500">
            اذهب للكورس
            </button>
            </a>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CouresDetailsCard
