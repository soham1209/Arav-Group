import React from 'react'
import { Link } from 'react-router'
function Button({hover,maxWidth}) {
    return (


        <div className={`button relative px-8 py-4 text-white text-xl font-normal rounded-full 
        bg-gradient-to-r from-blue3 to-blue1 bg-[length:100%_300%] ${maxWidth} 
        ${hover} 
        `}>
            <Link to="/contact-us">
                Get Started
            </Link>
        </div>
    )
}

export default Button