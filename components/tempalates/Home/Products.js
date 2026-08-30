import ProductCard from "../../modules/ProductsCard/ProductsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function Products({ data }) {
  return (
    <>
      <div className="w-full md:my-10">
        <div className="w-full flex justify-center pt-3">
          <span className="bg-amber-500 w-0.5 h-15 md:h-25"></span>
        </div>
        <div className="flex justify-center">
          <span className="text-[30px]  text-amber-500">
            Our Products
          </span>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[90%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
