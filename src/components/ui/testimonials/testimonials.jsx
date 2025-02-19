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
            name="John Doe"
            description="The website stands out as a comprehensive platform that caters to a wide range of industries. This diversity in offerings makes it a valuable resource for businesses and individuals alike."
            rating="2"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-2_pqrobk.jpg"
            name="Marry Doe"
            description="The emphasis on Healthcare & Wellness Solutions is commendable. In today's fast-paced world, promoting well-being is crucial, and this platform addresses that need effectively."
            rating="3"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-1_caiysc.jpg"
            name="Alexa Morkel"
            description="The inclusion of Education & Skill Development solutions is particularly noteworthy. It demonstrates a commitment to fostering career growth and empowering individuals with the skills necessary for success in their respective fields."
            rating="4"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124512/FoodVillage/cutomers/customer-3_lpufft.jpg"
            name="Alamin Sheikh"
            description="The focus on Real Estate Development & Property Management highlights the platform's understanding of modern infrastructure needs. This is essential for businesses looking to establish a strong physical presence."
            rating="3"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-5">
          <Testimonial
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/cutomers/customer-4_wx2qnv.jpg"
            name="Marry Doe"
            description="The website stands out as a comprehensive platform that caters to a wide range of industries. This diversity in offerings makes it a valuable resource for businesses and individuals alike."
            rating="2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
