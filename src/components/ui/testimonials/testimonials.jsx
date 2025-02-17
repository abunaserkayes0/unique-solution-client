import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Testimonial from "./testimonial";
import Content from "../content/content";

export default function Testimonials() {
  return (
    <div className="my-10">
      <Content
        miniTitle="Testimonial"
        title="What Customers Says"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-4_wx2qnv.jpg"
            name="Hasan Jaminl"
            rating="3"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-2_pqrobk.jpg"
            name="Hasan Jaminl"
            rating="3"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-1_caiysc.jpg"
            name="Hasan Jaminl"
            rating="3"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124512/FoodVillage/cutomers/customer-3_lpufft.jpg"
            name="Hasan Jaminl"
            rating="3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
