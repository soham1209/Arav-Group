import React, { useEffect } from 'react'
import './Home.css'

import { Button,ServiceCard,PointCard,ReviewCard} from '../index';
import{DollarIcon,EuroIcon,RupeeIcon,YenIcon} from '../../assets/index'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";

//motion animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Form } from 'react-router';

const currencyIcons = [
  { src: RupeeIcon, alt: "Rupee", position: "top-7 left-75", size: "w-30" },
  { src: DollarIcon, alt: "Dollar", position: "bottom-75 left-60", size: "w-26" },
  { src: EuroIcon, alt: "Euro", position: "top-17 right-70", size: "w-30" },
  { src: YenIcon, alt: "Yen", position: "bottom-80 right-75", size: "w-18" },
];

const pointCards = [
  { delay: 0, initialY: 100, margin: "md:mt-0" },
  { delay: 0.2, initialY: 120, margin: "md:mt-15" },
  { delay: 0.4, initialY: 140, margin: "md:-mt-15" },
  { delay: 0.6, initialY: 160, margin: "md:mt-0" },
];

const serviceCards = [
  { initialX: -100 },
  { initialX: -120 },
  { initialX: -140 }
];

const reviewCards = [
  { review: 2 },
  { review: 2 },
  { review: 2 },
  { review: 2 },
  { review: 2 }
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
      <div className="relative flex flex-col items-center mt-10 sm:mt-20 min-h-[60vh] md:min-h-screen bg-white text-center px-4 sm:px-6">
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue5 text-blue2 rounded-full">
          CONSULTANT
        </span>
        <h2 className="text-2xl sm:text-5xl mt-8 font-semibold text-black">
          Accounting & Tax Services
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black mt-4">
          AARAV GROUP
        </h1>
        <p className="mt-10 text-xl sm:text-lg md:text-4xl font-medium text-textCor max-w-[90%] sm:max-w-3xl">
          Invest your time and efforts on running your business. Leave the accounting to us.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full md:w-80 sm:w-72 text-base sm:text-lg border-2 text-textCor border-borderCor rounded-full focus:outline-none focus:ring-2 focus:ring-blue2"
          />
          <Button hover="transition-all duration-500 hover:bg-[position:24900%_0] focus:outline-none " />
        </div>


        <div className="absolute inset-0 justify-center items-center z-0 hidden lg:block">
          {currencyIcons.map((icon, index) => (
            <motion.img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={`absolute ${icon.position} ${icon.size}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>

      {/* SERVICES section */}
      <div className='serdiv relative flex flex-col items-center min-h-[60vh] md:min-h-screen text-center p-20 px-4 sm:px-6'>
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-black text-blue2 rounded-full">
          SERVICES
        </span>
        <h2 className="text-2xl sm:text-5xl mt-8 font-bold text-white">
          Provide quality Services.
        </h2>

        <div className='grid gap-6 md:grid-cols-3 max-w-[90rem] mx-auto px-4 text-center mt-10 z-10'>
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} card={card} index={index} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className='hidden md:block text-[24rem] font-bold -mt-60 -mb-51'>
          <p style={{
            WebkitTextStroke: "3px #63626C",
            color: "transparent",
          }}>Services</p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US section */}
      <div className="flex flex-col md:flex-row max-w-[75%] min-h-screen mx-auto mt-30">
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
    </div >
  )
}

export default Home