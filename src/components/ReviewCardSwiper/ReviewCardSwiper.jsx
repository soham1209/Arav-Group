import React from 'react'
import {ReviewCard} from'../index.js'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";

const reviewCards = [
  { review: 2 },
  { review: 2 },
  { review: 2 },
  { review: 2 },
  { review: 2 }
];

function ReviewCardSwiper() {
    return (
        <div className="flex justify-center flex-col text-center">
            <div className=" mx-auto max-w-xl mt-20">
                <span className="px-8 py-2 text-sm sm:text-base font-semibold  bg-blue5 text-blue2 rounded-full">
                    TESTIMONIALS
                </span>
                <h2 className="text-2xl sm:text-5xl mt-8 font-bold ">
                    Love from Clients
                </h2>
            </div>
            <div className="max-w-[75%] mx-auto mt-10 shadow-[0_0_100px_29px_rgba(0,180,216,0.25)] mb-50 ">
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={60}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
                        640: { slidesPerView: 2, spaceBetween: 20 },  // Tablets
                        1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptops
                        1280: { slidesPerView: 3, spaceBetween: 60 }, // Desktops
                    }}
                    className=""
                >
                    {reviewCards.map((card, index) => (
                        <SwiperSlide key={index}><ReviewCard /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
     
  )
}

export default ReviewCardSwiper