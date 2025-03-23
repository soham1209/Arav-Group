import React from 'react'
import './Header.css'
import logo from "../../assets/logo.jpg";
import { NavLink } from 'react-router'
import Button from '../Button/Button';
import { useState } from 'react';
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="header sticky top-0 bg-white z-50">
            <div className="logo">
                <img src={logo} alt="AravGroup" />
            </div>

            <button
                className="md:hidden text-blue2"
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="nav hidden md:flex border-2 border-solid rounded-full">
                <nav className="flex items-center space-x-6 p-2 rounded-full ">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-6 py-2 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/gst-filling"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        GST Filing
                    </NavLink>
                    <NavLink
                        to="/income-tax"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        Income Tax
                    </NavLink>
                    <NavLink
                        to="/accounting"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        Accounting
                    </NavLink>
                    <NavLink
                        to="/other-services"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full font-medium text-xl  ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        Other Service
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black font-medium hover:text-blue2"
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                </nav>
            </div>
            <div className="hidden md:block">
                <Button hover="transition-all duration-500 hover:bg-[position:118000%_0] focus:outline-none "/>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white shadow-md w-full">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/gst-filling" onClick={() => setIsOpen(false)}>GST Filing</NavLink>
                        <NavLink to="/income-tax" onClick={() => setIsOpen(false)}>Income Tax</NavLink>
                        <NavLink to="/accounting" onClick={() => setIsOpen(false)}>Accounting</NavLink>
                        <NavLink to="/other-services" onClick={() => setIsOpen(false)}>Other Service</NavLink>
                        <NavLink to="/about-us" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    </nav>
                </div>
            )}</div>
    )
}
export default Header