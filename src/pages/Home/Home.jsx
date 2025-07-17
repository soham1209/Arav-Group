import React, { useEffect } from 'react'
import './Home.css'
import BgImg from '../../assets/caBackGround.jpg';
import { Link } from 'react-router'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { Button, ServiceCard, PointCard, ReviewCard, ReviewCardSwiper } from '../../components/index.js';

//motion animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Form } from 'react-router';

import { Typewriter } from 'react-simple-typewriter';

const pointCards = [
  { delay: 0, initialY: 100, margin: "md:mt-0" },
  { delay: 0.2, initialY: 120, margin: "md:mt-15" },
  { delay: 0.4, initialY: 140, margin: "md:-mt-15" },
  { delay: 0.6, initialY: 160, margin: "md:mt-0" },
];

const serviceCards = [
  { initialX: -100 },
  { initialX: -120 },
  { initialX: -140 },
  { initialX: -160 },
  { initialX: -180 },
];

function Home() {
  //for service name
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    console.log("Is in view:", inView)
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
    else {
      controls.start({ opacity: 0, y: 100 });  // Reset animation when out of view
    }
  }, [controls, inView]);

  //for text of why to chose us
  const textControls = useAnimation()
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (textInView) {
      textControls.start({ opacity: 1, x: 0 })
    }
    else {
      textControls.start({ opacity: 0, x: -100 })
    }

  }, [textControls, textInView])

  return (
    <div className="overflow-x-hidden ">
      {/* hero Section */}
      <div
        className="relative min-h-[60vh] sm:h-screen bg-cover bg-center flex flex-col items-center sm:items-start justify-center px-4
             before:absolute before:inset-0 before:bg-black/60 before:z-0"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        {/* Content should appear above the overlay */}
        <div className="relative z-10 space-y-2 sm:space-y-4 sm:ml-10 text-center sm:text-left">

          {/* ROW: MANAGE YOUR + TYPEWRITER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide leading-tight text-white">
              MANAGE YOUR
            </h1>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide leading-tight text-blue1">
              <Typewriter
                words={[
                  'ACCOUNTS',
                  'TAXATIONS',
                  'FIRM',
                  'COMPANY',
                  'AUDIT',
                  'ACCOUNTING STANDARDS',
                  'GST COMPLIANCE'
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                cursorClassName="text-blue4"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </div>

          {/* LINE: IN RIGHT WAY */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide leading-tight text-white">
            IN RIGHT WAY
          </h1>

          <h2 className='text-2xl sm:text-3xl font-semibold text-white mt-6'> Consulting services for better futures</h2>

          <div className=" flex gap-10 mt-6 ">
            <Button hover="transition-all duration-500 hover:bg-[position:119000%_0] focus:outline-none " />
            <button className='text-xl text-white font-normal border-2 border-white  rounded-full px-8 py-4 '><Link to="/other-services">
              Our Services
            </Link></button>
          </div>
        </div>

      </div>


      {/* SERVICES section */}
      <div className='serdiv relative flex flex-col items-center min-h-[60vh] md:min-h-screen text-center p-20 px-4 sm:px-6'>
        {/* SERVICES badge */}
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-black text-blue2 rounded-full">
          SERVICES
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-5xl mt-8 font-bold text-white">
          Provide quality Services.
        </h2>

        {/* Swiper container with overflow fix */}
        <div className='w-full max-w-[90rem] mx-auto mt-10 z-10 bg-transparent overflow-visible px-4'>
          <Swiper
            className="custom-swiper "
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {serviceCards.map((card, index) => (
              <SwiperSlide key={index} className="px-4">
                <ServiceCard card={card} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Decorative large background text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className='hidden md:block text-[24rem] font-bold -mt-60 -mb-51 mask-b-from-50%'
        >
          <p
            style={{
              WebkitTextStroke: '3px #63626C',
              color: 'transparent',
            }}
          >
            Services
          </p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US section */}
      <div className="flex flex-col md:flex-row max-w-[83%] min-h-screen mx-auto mt-30 gap-20">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -100 }}
          animate={textControls}
          transition={{ duration: 1, delay: .1 }}
          className=" mx-auto max-w-xl mt-20">
          <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue5 text-blue2 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-5xl mt-8 font-bold ">
            Accurate Record Keeping
          </h2>
          <p className="text-textCor text-xl mb-4 mt-8 text-justify">
            We aim to maintain precise and reliable records to ensure transparency, compliance, and informed decision-making. Our commitment to accuracy strengthens trust with clients, stakeholders, and regulatory bodies, setting us apart in our industry.
          </p>
        </motion.div>

        <div className="grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-y-0">
          {pointCards.map((card, index) => (
            <PointCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* TESTIMONIALS section */}
      <div className="testimonials">
        <ReviewCardSwiper />
      </div>

    </div >
  )
}

export default Home