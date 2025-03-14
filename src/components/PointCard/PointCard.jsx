import React, { useEffect } from 'react'
import cal from '../../assets/cal.svg'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function PointCard({card,index}) {

  const controls = useAnimation()
  const {ref,inView} = useInView({triggerOnce:true, threshold:.2})

  useEffect(()=>{
    if (inView) {
      controls.start({opacity:1,y:0})
    } else {
      controls.start({opacity:0,y:100})
    }
  },[controls,inView])

  return (
    <motion.div 
    key={index}
    ref={ref} 
    initial={{opacity:0,y:card.initialY}}
    animate={controls}
    transition={{ duration: 1, delay: card.delay }}
    className={`mx-auto p-5 text-left ${card.margin}`}>
      <div className="bg-white rounded-3xl p-6 flex flex-col items-start shadow-[5px_5px_100px_10px_rgba(0,180,216,0.25)] ">
        <img
          src={cal}
          alt='cal'
          className="h-20 w-auto object-cover mb-2"
        />
        <h3 className="text-2xl font-semibold mb-2">Quick Response</h3>
        <p className="text-gray-600 mb-4 text-lg">We respond to your queries promptly - your satisfaction is our priority!</p>
      </div>
    </motion.div>
  )
}
export default PointCard