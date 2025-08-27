import React from 'react'
import { error } from '../assets/index.js'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-5">
      <img 
        src={error} 
        alt="Error" 
        className="w-[400px] max-w-full"
      />
      <h1 className="text-3xl md:text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-400 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={handleBack}
        className="px-6 py-3 rounded-xl font-medium shadow-md border border-[#11baf0] hover:shadow-[0_0_50px_#11b8f0a2] transition"
      >
        Back
      </button>
    </div>
  )
}

export default ErrorPage
