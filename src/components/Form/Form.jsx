
import {  motion,useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'

function Form() {

    const controls = useAnimation()
    const {ref,inView} = useInView({triggerOnce:true,threshold:.2})

    useEffect(()=>{
        if(inView){
            controls.start({opacity:1,y:0})
        }
        else{
            controls.start({opacity:1,y:100})
        }
    },[
        controls,inView])
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    return (
        <motion.div 
        ref={ref}
        initial={{opacity:0,y:100}}
        animate={controls}
        transition={{duration:1}}
        className=" w-full max-w-3xl mx-auto p-10 sm:w-11/12 md:w-10/12 lg:w-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <input
                        type="email"
                        {...register("email", { required: "Email is Required" })}
                        placeholder="Your Email"
                        className="w-full p-3 border-2 border-borderCor rounded-full focus:outline-none focus:ring-2 focus:ring-blue2"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="flex gap-4">
                    <div className='w-1/2'>
                        <input
                            type="tel"
                            {...register("mobile", {
                                required: "Mobile No is Required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid mobile number",
                                },
                            })}
                            placeholder="Your No"
                            className="w-full p-3 border-2 border-borderCor rounded-full focus:outline-none focus:ring-2 focus:ring-blue2"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
                    </div>
                    <div className='w-1/2'>
                        <input
                            type="text"
                            {...register("name", { required: "Email is Required" })}
                            placeholder="Your Name"
                            className="w-full p-3 border-2 border-borderCor rounded-full focus:outline-none focus:ring-2 focus:ring-blue2"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                </div>

                <div>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your Message/Query"
                        rows="4"
                        className="w-full p-3 border-2 border-borderCor rounded-lg focus:outline-none focus:ring-2 focus:ring-blue2"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className=" px-8 py-4 text-white text-xl font-normal rounded-full 
                                bg-gradient-to-r from-blue3 to-blue1 bg-[length:100%_300%]  
                                transition-all duration-500 hover:bg-[position:73000%_0] focus:outline-none
                                cursor-pointer
                                max-w-sm"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

export default Form