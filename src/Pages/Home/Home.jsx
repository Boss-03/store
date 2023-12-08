import React from 'react'
// import Card from '../../components/Card';
//swiper
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Home = () => {
  return (
    <div className="">
      <div>
        <p>HOME</p>
        <div className=" mb-[30px] mt-14">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="m-[auto] "
                alt="main banner"
                src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1696573347630.png"
                decoding="async"
                data-nimg="intrinsic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="m-[auto] "
                src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1696483363655.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-[6%] ml-[13%] ">
        <h3 className="text-2xl font-bold ">Популярные категории</h3>
        <div className="">
          <div className="flex justify-around mb-9 mt-[7%] mr-[220px]">
            <div className="flex flex-col items-center ">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />
              <p>Кондиционеры</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />

              <p>Кондиционеры</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />

              <p>Кондиционеры</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />

              <p>Кондиционеры</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />

              <p>Кондиционеры</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="rounded-[120px]"
                src="src/assets/6wx00n7c.png"
                alt=""
              />

              <p>Кондиционеры</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[6%] ml-[13%]">
        <p className="text-2xl font-bold ">Самые горячие скидки 🔥</p>
      </div>
    </div>
  );
}

export default Home