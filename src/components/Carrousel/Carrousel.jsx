import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, A11y]);

const data = [
  {
    id: 1,
    username: "Matias",
    testimonial:
      "lorem lorem lorem lorem  ipsum dolor sit,  lorem lorem lorem lorem  ipsum dolor sit",
  },
  {
    id: 2,
    username: "Pablo",
    testimonial:
      "lorem lorem lorem lorem  ipsum dolor sit,  lorem lorem lorem lorem  ipsum dolor sit",
  },
  {
    id: 3,
    username: "Javier",
    testimonial:
      "lorem lorem lorem lorem  ipsum dolor sit,  lorem lorem lorem lorem  ipsum dolor sit",
  },
  {
    id: 4,
    username: "Martin",
    testimonial:
      "lorem lorem lorem lorem  ipsum dolor sit,  lorem lorem lorem lorem  ipsum dolor sit",
  },
];

const Carrousel = () => {
  return (
    <>
      <h2 className="xl:text-xl  lg:text-lg md:text-lg sm:text-base text-center mt-16 font-roboto font-bold text-secondary pb-[40px]">
        Clientes satisfechos
      </h2>
      <div className="mb-[50px]">
        <Swiper
          className="swiper-container w-3/5 pb-[30px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            480: {
              width: 480,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          onInit={(swiper) => (swiper.navigation.prevEl.style.display = "none")}
          onReachEnd={(swiper) => {
            console.log(swiper);
            swiper.navigation.nextEl.style.display = "none";
            swiper.navigation.prevEl.style.display = "block";
          }}
          onReachBeginning={(swiper) => {
            swiper.navigation.nextEl.style.display = "block";
            swiper.navigation.prevEl.style.display = "none";
          }}
        >
          {data.map((user) => (
            <SwiperSlide
              key={user.id}
              className="flex justify-center slide pb-1"
            >
              <div className="slide-content xl:w-[397px] lg:w-[397px] md:w-[350px] sm: w-[397px] xs:w-[300px] bg-primary  rounded-[8px]  text-[18px]  p-2">
                <p className="flex justify-center text-[white] text-center user-testimonial md:text-lg sm:text-base xs: text-sm ">
                  <i>"{user.testimonial}"</i>
                </p>
                <div className="flex justify-center slide-inner">
                  <img
                    src="/user1.png"
                    alt="user"
                    className="user-photo flex justify-center "
                  />
                </div>
                <h5 className="flex justify-center text-[white] pb-2 md:text-lg sm:text-base xs: text-sm">
                  {user.username}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carrousel;
