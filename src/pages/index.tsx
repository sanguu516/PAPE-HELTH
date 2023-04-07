import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function index() {
  return (
    <div className="">
      <Header />
      <section className=" bg-main-color w-full h-full flex justify-center">
        <div className="w-[300px] h-[320px] mx-[20px] mb-[20px]	bg-white drop-shadow-xl "></div>
        <div className="flex flex-col lg:w-[880px]  w-[220px] h-[320px]">
          <div className="w-full h-full mb-[20px]  border-solid border-2 ">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper text-xl"
            >
              <SwiperSlide>슬라이드쇼 1</SwiperSlide>
              <SwiperSlide>슬라이드쇼 2</SwiperSlide>
              <SwiperSlide>슬라이드쇼 3</SwiperSlide>
              <SwiperSlide>슬라이드쇼 4</SwiperSlide>
              <SwiperSlide>슬라이드쇼 5</SwiperSlide>
              <SwiperSlide>슬라이드쇼 6</SwiperSlide>
              <SwiperSlide>슬라이드쇼 7</SwiperSlide>
              <SwiperSlide>슬라이드쇼 8</SwiperSlide>
              <SwiperSlide>슬라이드쇼 9</SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full h-full border-solid border-2 bg-white"></div>
        </div>
      </section>
    </div>
  );
}
