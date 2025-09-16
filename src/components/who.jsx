import React from "react";
import ScrollToTop from "./ScrollToTop.jsx";
import { who , Mohamed , Zeyad , Ahmed} from "../assets/index.js";
import Counter from "./Counter.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";



const Who = () => {
  // const [isVisible, setIsVisible] = useState(false);

  const team = [
    {
      name: "احمد رزق",
      role: "Frontend Developer",
      image: Ahmed,
      social: {
        twitter: "https://www.instagram.com/?hl=en",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
      }
    },
        {
      name: "زياد عبدالله",
      role: "Frontend Developer",
      image: Zeyad,
      social: {
        twitter: "https://www.instagram.com/?hl=en",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/ZeyadAbdallahSayed"
      }
    },
    {
      name: "محمد شريف",
      role: "Content Writer",
      image: Mohamed,
      social: {
        twitter: "https://www.instagram.com/?hl=en                           ",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
      }
    },

  ];




  return (
    <>
      <ScrollToTop />
      


      <section
        id="about"
        className="dark:bg-slate-950 dark:text-white text-black py-0 px-0 md:px-6 md:py-20 relative overflow-hidden"
      >

        {/* العنوان + الوصف */}
        <div className="max-w-6xl mx-auto text-center md:px-6 md:py-12 py-6 px-6">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">من نحن</h2>
          <p className="text-lg dark:text-gray-300 text-black max-w-2xl mx-auto mb-12 leading-relaxed [word-spacing:0.15rem]">
            موقع <span className="text-cyan-400 font-semibold">طريقك</span>{" "}
            بيقدملك كورسات وخطط تعليمية بشكل تايم لاين منظم يخليك تمشي خطوة
            بخطوة وتوصل لهدفك.
          </p>
        </div>

        {/* النبذة + الصورة */}
        <div className="mx-auto max-w-6xl py-10" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            <div className="flex flex-col justify-center">
              <p className="text-lg dark:text-gray-300 text-black leading-relaxed [word-spacing:0.15rem]">
                موقع <span className="text-cyan-400 font-semibold">طريقك</span>{" "}
                هو منصّة عربية بتقدّم لك كورسات وخطط تعليمية في مجالات مختلفة،
                كلها متقسمة في صورة مسارات (Roadmaps) واضحة ومنظمة. هدفنا إننا
                نخلّي عملية التعلم أبسط، ونوجّهك خطوة بخطوة من البداية لحد
                الاحتراف، علشان تقدر تحقق هدفك وتبني مستقبلك بثقة.
              </p>
              


              <Counter />

            </div>
            <div className="flex justify-center">
              <img
                src={who}
                alt="about illustration"
                className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-contain drop-shadow-lg animate-float"
              />
            </div>
          </div>
        </div>

        {/* الفريق */}
        <div className="team mx-auto max-w-6xl text-center py-20 px-6">
          <h2 className="text-4xl font-bold mb-12">فريقنا</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className=" dark:bg-[#111425] bg-[#eaeaeac6] rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-cyan-900/20 transition-all duration-300 relative overflow-hidden team-member-card"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-bl-full"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-cyan-400 relative z-10"
                />
                <h3 className="text-xl font-semibold text-cyan-400">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                

              </div>
            ))}
          </div>
        </div>
      </section>



      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .team-member-card:hover .team-member-social {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Who;