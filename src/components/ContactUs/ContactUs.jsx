import React from 'react'
import { useEffect } from 'react'
import { ContactUsCard, Form } from '../index.js'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactUsCards = [
    { initialX: -100 },
    { initialX: -120 },
    { initialX: -140 }
];

function ContactUs() {

    const controls = useAnimation()
    const { ref, inView } = useInView({ triggerOnce: true, threshold: .5 })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 })
        } else {
            controls.start({ opacity: 0, y: 100 });
        }

    }, [controls, inView])

    return (
        <div className=''>
            <div className="hero relative flex flex-col items-center bg-blue5 -mt-34">
                <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue4 text-blue2 rounded-full mt-50">
                    Contact us
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black mt-4">
                    Contact Information
                </h1>
                <p className="mt-10 mb-30 text-xl sm:text-lg md:text-4xl font-medium text-textCor max-w-[90%] sm:max-w-3xl">
                    Home / Contact us
                </p>
            </div>
            <div className="info relative flex flex-col items-center">
                <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue5 text-blue2 rounded-full mt-20">
                    Contact Info
                </span>
                <h2 className="text-2xl sm:text-5xl mt-8 font-bold text-black">
                    Contact Information

                </h2>
                <div className='grid gap-10 md:grid-cols-3 mx-auto px-4 text-center mt-20 '>
                    {ContactUsCards.map((card, index) => (
                        <ContactUsCard key={index} card={card} index={index} />
                    ))}
                </div>

            </div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="map  relative flex flex-col ">
                <iframe className='max-w-[83%] m-auto rounded-2xl mt-40'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.740393892408!2d73.8286605746883!3d20.019407571680592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea710fdf31cb%3A0x41dd51e38f68df4e!2sShri%20Bali%20Maharaj%20Mandir!5e0!3m2!1sen!2sin!4v1742656202669!5m2!1sen!2sin"
                    width="2000" height="550" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>

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
    )
}

export default ContactUs