import React,{useRef} from 'react';
import { useParams } from 'react-router';
import services from '../../data/servicesData.json';
// import { team } from '../../assets/index.js';
import team from '../../assets/team.jpg';
import { Form } from '../../components/index.js';
import { motion,useInView } from 'framer-motion';


function Service() {
  const { '*': dynamicPath } = useParams(); // gets full nested path like "audit/internal"
  const service = services.find(s => s.id === dynamicPath);

  if (!service) return <p className="p-4 text-red-500">Service not found</p>;

  const imageRef = useRef(null);
  const textRef = useRef(null);

  const imageInView = useInView(imageRef, { amount: 0.3, once: true });
  const textInView = useInView(textRef, { amount: 0.3, once: true });

  return (
    <div>
      <div className="hero relative flex flex-col items-center bg-blue5 -mt-34">
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue4 text-blue2 rounded-full mt-50">
          Our Service
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black mt-4">
          {service.title}
        </h1>
        <p className="mt-10 mb-30 text-xl sm:text-lg md:text-4xl font-medium text-textCor max-w-[90%] sm:max-w-3xl">
          Home / Service
        </p>

      </div>
      <div className="p-6 max-w-7xl mx-auto mt-24 flex flex-col md:flex-row items-start gap-10">
        {/* Image Animation from Left */}
        <motion.div
          ref={imageRef}
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={imageInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={team} alt="text" className="w-full h-auto rounded-xl" />
        </motion.div>

        {/* Text Animation from Right */}
        <motion.div
          ref={textRef}
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={textInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-700 text-justify">
            {service.description}
          </p>
        </motion.div>
      </div>


      <div className="form relative flex flex-col items-center">
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue5 text-blue2 rounded-full mt-20">
          Contact Info
        </span>
        <h2 className="text-2xl sm:text-5xl mt-8 font-bold text-black">
          Contact Information

        </h2>
        <Form />
      </div>

    </div>

  );
}

export default Service;
