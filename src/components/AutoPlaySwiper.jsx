import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AutoPlaySwiper() {
  return (
    <div className="w-full h-[400px] mt-[5rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, // time in ms
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241023125329637551/top-10-artificial-intelligence-ai-predictions-in-2024.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240215165347/Cybersecurity-Roadmap-Career-Path-Skills-Salary.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240529152324/Backend-Developer-Roadmap-copy.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src= "https://media.geeksforgeeks.org/wp-content/uploads/20240117185409/Complete-Roadmap-GATE-2025-1.gif"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240308115926/How-to-Become-a-Cloud-Engineer--Complete-Learning-Roadmap.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220926110021/How-to-Become-a-Data-Analyst-Complete-Roadmap.png"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240313144021/What-is-a-Marketing-Plan-copy.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231031170733/How-Dropshipping-Works-copy.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src= "https://media.geeksforgeeks.org/wp-content/uploads/20240122164329/product-roadmap.webp"
            alt="slide 1"
            className="w-full h-full object-contain rounded-2xl"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
