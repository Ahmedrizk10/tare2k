import React from "react";
import { error } from "../assets/index.js";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <ScrollToTop />
      <div className=" container mx-auto md:w-[1200px] flex items-center justify-between min-h-screen text-center gap-5 dark:bg-slate-950 dark:text-white text-black ju">
        <div className="image">
          <img src={error} alt="Error" className="w-[500px] max-w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 max-w-md">
            The page you are looking for doesn’t exist or has been moved.
          </p>
          <button
            onClick={handleBack}
            className="px-5 py-2 rounded-xl font-medium shadow-md border border-[#11baf0] hover:shadow-[0_0_50px_#11b8f0a2] transition w-40 mx-auto"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
