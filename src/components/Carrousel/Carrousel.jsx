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
      <h2 className="xl:text-xl  lg:text-lg md:text-lg sm:text-base text-center mt-16 font-roboto font-bold text-secondary">
        Clientes satisfechos
      </h2>
      <Swiper
        className="mt-16  w-4/6 swiper-container pb-3 mb-20"
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
          <SwiperSlide key={user.id} className="flex justify-center slide pb-5">
            <div className="slide-content w-[397px] bg-primary  rounded-[8px]  text-[18px]  p-2">
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
    </>
  );
};

export default Carrousel;
