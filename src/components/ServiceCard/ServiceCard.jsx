import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tax from "../../assets/homeSvg/tax.svg";

function ServiceCard({ card, index }) {
  const serviceControls = useAnimation();
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (serviceInView) {
      serviceControls.start({ opacity: 1, x: 0 });
    } else {
      serviceControls.start({ opacity: 0, x: -100 });
    }
  }, [serviceControls, serviceInView]);

  return (
    <motion.div
      key={index}
      ref={serviceRef}
      initial={{ opacity: 0, x: card.initialX }}
      animate={serviceControls}
      transition={{ duration: 1, delay: index * 0.3 }}
      className="px-4 text-center z-10"
    >
      <div className="bg-white rounded-3xl p-6 flex flex-col items-center h-[600px] shadow-[0_5px_60px_0_#0077B6]">
        <img
          // ?src={card.image}
          src= {tax}
          alt={card.title}
          className="h-70 w-auto object-cover"
        />
        <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
        <p className="text-textCor text-xl mb-4 overflow-hidden">{card.description}</p>
        <button className="font-semibold text-xl hover:text-blue2 duration-300 ease-in-out">
          Discover more
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
