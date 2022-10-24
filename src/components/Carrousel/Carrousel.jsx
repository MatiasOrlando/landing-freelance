import React, { useEffect, useRef } from "react";
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo perspiciatis iure nihil illum, hic voluptates voluptate aspernatur sequi.",
  },
  {
    id: 2,
    username: "Pablo",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo perspiciatis iure nihil illum, hic voluptates voluptate aspernatur sequi.",
  },
  {
    id: 3,
    username: "Javier",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo perspiciatis iure nihil illum, hic voluptates voluptate aspernatur sequi.",
  },
  {
    id: 4,
    username: "Martin",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo perspiciatis iure nihil illum, hic voluptates voluptate aspernatur sequi.",
  },
];

const Carrousel = () => {
  const nextBtn = useRef();
  const prevBtn = useRef();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 880) {
        nextBtn.current.classList = "swiper-button-hidden";
        prevBtn.current.classList = "swiper-button-hidden";
      }
      if (window.innerWidth >= 881) {
        nextBtn.current.classList = "swiper-button-next";
        prevBtn.current.classList = "swiper-button-prev";
      }
    }
    window.addEventListener("resize", handleResize);
  }, [window]);

  return (
    <>
      <h2 className="lg:text-[35px] text-[20px] text-center mt-16 font-roboto font-bold text-secondary pb-[83px] pt-[40px]">
        Clientes satisfechos
      </h2>
      <div className="mb-[127px] relative flex">
        <Swiper
          className="swiper-container flex pb-[30px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
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
              className="flex items-center justify-center slide pb-1"
            >
              <div className="slide-content xl:w-[397px] lg:w-[397px] md:w-[350px] sm: w-[397px] xs:w-[300px] bg-primary  rounded-[8px]  text-[18px]  p-2">
                <p className="flex justify-center text-[white] text-center user-testimonial lg:text-lg md:text-base sm:text-base xs: text-sm pt-[20px] ">
                  <i>"{user.testimonial}"</i>
                </p>
                <div className="flex justify-center slide-inner">
                  <img
                    src="/assets/reviewphoto.png"
                    alt="client photo"
                    className="user-photo flex justify-center pt-[32px]"
                  />
                </div>
                <h5 className="flex justify-center text-[white] pb-2 lg:text-lg md:text-base sm:text-base xs: text-sm pt-[16px]">
                  {user.username}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute" ref={prevBtn}></div>
        <div className="swiper-button-next absolute" ref={nextBtn}></div>
      </div>
    </>
  );
};

export default Carrousel;
