import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      <h2 className="xl:text-xl  lg:text-lg md:text-lg sm:text-base xs:text-base text-center mt-16">
        Clientes satisfechos
      </h2>
      <Swiper
        className="mt-16  w-4/6 swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          440: {
            width: 440,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {data.map((user) => (
          <SwiperSlide key={user.id} className="flex justify-center slide">
            <div className="slide-content">
              <p className="flex justify-center text-center user-testimonial xl:text-xl  lg:text-lg md:text-lg sm:text-base xs: text-sm ">
                <i>"{user.testimonial}"</i>
              </p>
              <div className="flex justify-center ">
                <img
                  src="/user1.png"
                  alt="user"
                  className="user-photo flex justify-center "
                />
              </div>
              <h5 className="flex justify-center py-3 ">{user.username}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrousel;
