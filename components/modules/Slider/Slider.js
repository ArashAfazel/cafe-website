import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-playfair",
});

export default function Slider() {
  return (
    <>
      <div className="">
        <div className="sm:hidden relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mySwiper w-full h-screen "
          >
            <SwiperSlide>
              <img
                className=" object-center w-full h-full "
                src="/images/landing-mob-1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" object-center w-full h-full "
                src="/images/landing-mob-2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="  w-full h-full  "
                src="/images/landing-mob-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" object-center w-full h-full"
                src="/images/landing-mob-4.jpg"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute inset-0 text-white z-2 bg-black/60"></div>
        </div>
        <div className="max-sm:hidden relative ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mySwiper w-full h-screen "
          >
            <SwiperSlide>
              <img
                className=" object-center w-full h-full  "
                src="/images/landing1.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" object-center w-full h-full "
                src="/images/landing2.jpg"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute inset-0 text-white z-2 bg-black/60"></div>
        </div>
        <div
          className={` absolute top-[40%] left-[15%] text-white text-4xl md:text-7xl z-3 flex flex-col ${playfair.className}`}
        >
          <span>Sweet Moments</span>
          <div>
          <span>Start </span>
          <span className="text-amber-700">Here</span>
          </div>
        </div>
      </div>
    </>
  );
}
