import React, { useEffect } from "react";
import { location } from '../../assets/index'
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function ContactUsCard({card,index}) {
  const controls = useAnimation()
  const { ref, inView } = useInView({triggerOnce: true, threshold: .2})

  useEffect(()=>{
    if(inView){
      controls.start({opacity:1,x:0})
    }
    else{
      controls.start({opacity:0,x:-100})
    }
  },[controls,inView])

  return (
    <motion.div
      ref={ref}
      initial={{opacity:0,x:card.initialX}}
      animate={controls}
      transition={{duration:1,delay:index*0.3}}

    className="flex flex-col items-center justify-center pr-25 pl-25 pb-10 border-3 border-borderCor rounded-2xl  bg-white max-w-sm mx-auto mt-18">
      <div className="w-32  mb-4 -mt-18">
        <img src={location} alt="Location Icon" className="w-full h-full" />
      </div>
      <h2 className="text-3xl font-semibold text-black">Our location</h2>
      <p className="text-textCor text-center  text-lg mt-6">
        1901 Thornridge Cir. <br />
        Shiloh, <br />
        Hawaii 81063
      </p>
    </motion.div>
  );
};

export default ContactUsCard;
