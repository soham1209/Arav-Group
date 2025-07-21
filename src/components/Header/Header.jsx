import React, { useState } from 'react';
import './Header.css';
import logo from "../../assets/logo.jpg";
import { NavLink, useLocation } from 'react-router';
import Button from '../Button/Button';
import { Menu, X, ChevronDown } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isKnowledgeBankActive = location.pathname.startsWith('/know-bank');
    return (
        <div className="header sticky top-0 z-50 w-[85%] flex items-center justify-around py-0 mt-4 -mb-26 mx-auto bg-white/50 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9px]">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="AravGroup" />
            </div>

            {/* Desktop Nav */}
            <div className="nav hidden md:flex border-2 border-solid rounded-full">
                <nav className="flex justify-around items-center gap-2 p-1 rounded-full">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-6 py-1 rounded-full font-medium text-xl ml-1 ${isActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/services/gst-filling"
                        className={({ isActive }) =>
                            `px-4 py-1 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"}`
                        }
                    >
                        GST Filing
                    </NavLink>

                    <NavLink
                        to="/services/income-tax"
                        className={({ isActive }) =>
                            `px-4 py-1 rounded-full font-medium text-xl ${isActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"}`
                        }
                    >
                        Income Tax
                    </NavLink>
                    <div className="relative group">
                        <div className="relative group">
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `px-4 py-1 rounded-full font-medium text-xl flex items-end gap-1 ${isActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"
                                    }`
                                }
                            >
                                Service <ChevronDown size={20} />
                            </NavLink>

                            {/* MAIN DROPDOWN */}
                            <div className="absolute left-1/2 -translate-x-1/2 min-w-[16rem] rounded-xl bg-white text-black opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50">

                                {/* 1. Accounting and Book Keeping (No Submenu) */}
                                <div className="px-4 py-2 bg-blue5 text-blue2 rounded-xl">
                                    <NavLink className="flex items-end" to="/services/account-bookkeeping">
                                        Accounting and Book Keeping
                                    </NavLink>
                                </div>

                                {/* 2. Audit and Assurance */}
                                <div className="relative group/item px-4 py-2 bg-white text-blue2 rounded-xl hover:bg-blue100">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        Audit and Assurance <ChevronDown size={16} />
                                    </div>
                                    <div className="absolute left-full top-0 min-w-[15rem] rounded-xl bg-white opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto shadow-lg z-50">
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/audit/internal">Internal/Concurrent Audit</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/audit/cooperative">Co-operative Audit</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/audit/tax">Tax Audit</NavLink>
                                    </div>
                                </div>

                                {/* 3. Direct Tax */}
                                <div className="relative group/item px-4 py-2 bg-blue5 text-blue2 rounded-xl hover:bg-blue100">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        Direct Tax <ChevronDown size={16} />
                                    </div>
                                    <div className="absolute left-full top-0 min-w-[15rem] rounded-xl bg-white opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto shadow-lg z-50">
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/direct-tax/filling">Income Tax Filing</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/direct-tax/saving">Tax Saving</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/direct-tax/scrutiny">Scrutiny</NavLink>
                                    </div>
                                </div>

                                {/* 4. Indirect Taxation */}
                                <div className="relative group/item px-4 py-2 bg-white text-blue2 rounded-xl hover:bg-blue100">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        Indirect Taxation <ChevronDown size={16} />
                                    </div>
                                    <div className="absolute left-full top-0  min-w-[15rem] rounded-xl bg-white opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto shadow-lg z-50">
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/indirect/gst">GST Return & Compliance</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/indirect/notice">Notice Handling</NavLink>
                                    </div>
                                </div>

                                {/* 5. All Type of Registrations */}
                                <div className="relative group/item px-4 py-2 bg-blue5 text-blue2 rounded-xl hover:bg-blue100">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        All Type of Registrations <ChevronDown size={16} />
                                    </div>
                                    <div className="absolute left-full top-0  min-w-[17rem] rounded-xl bg-white opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto shadow-lg z-50">
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/registration/company">Company Incorporation</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/registration/gst">GST Registration</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/registration/partnership">Partnership Firm</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/registration/trust">Trust Registration</NavLink>
                                    </div>
                                </div>

                                {/* 6. Other Services */}
                                <div className="relative group/item px-4 py-2 bg-white text-blue2 rounded-xl hover:bg-blue100">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        Other Services <ChevronDown size={16} />
                                    </div>
                                    <div className="absolute left-full top-0  min-w-[18rem] rounded-xl bg-white opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto shadow-lg z-50">
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/other/project-report">Project Report</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/other/dsc">Digital Signature</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/other/web-development">Web Development</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/other/entity-selection">Business Entity Selection</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/other/business-succession">Business Succession Planning</NavLink>
                                        <NavLink className="block px-4 py-2 bg-white rounded-xl" to="/services/other/financial-planning">Financial Planning</NavLink>
                                        <NavLink className="block px-4 py-2 bg-blue5 rounded-xl" to="/services/other/retirement-planning">Retirement Planning</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="relative group">
                        <span
                            className={`px-4 py-1 rounded-full font-medium text-xl flex items-end gap-1 ${isKnowledgeBankActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"
                                } cursor-default select-none`}
                        >
                            Knowlage Bank <ChevronDown size={20} />
                        </span>


                        <div className="absolute left-1/2 -translate-x-1/2  min-w-[16rem] rounded-xl bg-white text-black opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50">

                            {/* 1. Accounting and Book Keeping (No Submenu) */}
                            <div className="px-4 py-2 bg-blue5 text-blue2 rounded-xl">
                                <NavLink className="flex items-end" to="/know-bank/event-calender">
                                    GST Event Calender
                                </NavLink>
                            </div>

                            {/* 2. Audit and Assurance */}
                            <div className="relative group/item px-4 py-2 bg-white text-blue2 rounded-xl hover:bg-blue100">
                                <NavLink className="flex items-end" to="/know-bank/calculator">
                                    GST Calculator
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `px-4 py-1 rounded-full font-medium text-xl mr-1 ${isActive ? "bg-blue5 text-blue2" : "text-black hover:text-blue2"}`
                        }
                    >
                        About Us
                    </NavLink>
                </nav>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
                <Button hover="transition-all duration-500 hover:bg-[position:118000%_0] focus:outline-none " />
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-blue2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* ─── Mobile Dropdown Nav ─────────────────────────────── */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 max-h-[90vh] overflow-y-auto">
                    <nav className="flex flex-col gap-2 py-4 px-4 text-base">

                        {/* Top‑level links */}
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/gst-filling" onClick={() => setIsOpen(false)}>GST Filing</NavLink>
                        <NavLink to="/income-tax" onClick={() => setIsOpen(false)}>Income Tax</NavLink>

                        {/* ── Services (collapsible) ── */}
                        <details className="w-full">
                            <summary className="py-2 cursor-pointer">Services</summary>
                            <div className="pl-4 flex flex-col gap-2 py-1">

                                {/* 1. Accounting & Book‑Keeping (no submenu) */}
                                <NavLink to="/services/account-bookkeeping" onClick={() => setIsOpen(false)}>
                                    Accounting & Book‑Keeping
                                </NavLink>

                                {/* 2. Audit & Assurance */}
                                <details>
                                    <summary className="cursor-pointer py-1">Audit & Assurance</summary>
                                    <div className="pl-4 flex flex-col gap-1 py-1 text-sm">
                                        <NavLink to="/services/audit/internal" onClick={() => setIsOpen(false)}>Internal / Concurrent Audit</NavLink>
                                        <NavLink to="/services/audit/cooperative" onClick={() => setIsOpen(false)}>Co‑operative Audit</NavLink>
                                        <NavLink to="/services/audit/tax" onClick={() => setIsOpen(false)}>Tax Audit</NavLink>
                                    </div>
                                </details>

                                {/* 3. Direct Tax */}
                                <details>
                                    <summary className="cursor-pointer py-1">Direct Tax</summary>
                                    <div className="pl-4 flex flex-col gap-1 py-1 text-sm">
                                        <NavLink to="/services/direct-tax/filling" onClick={() => setIsOpen(false)}>Income‑Tax Filing</NavLink>
                                        <NavLink to="/services/direct-tax/saving" onClick={() => setIsOpen(false)}>Tax Saving</NavLink>
                                        <NavLink to="/services/direct-tax/scrutiny" onClick={() => setIsOpen(false)}>Scrutiny</NavLink>
                                    </div>
                                </details>

                                {/* 4. Indirect Taxation */}
                                <details>
                                    <summary className="cursor-pointer py-1">Indirect Taxation</summary>
                                    <div className="pl-4 flex flex-col gap-1 py-1 text-sm">
                                        <NavLink to="/services/indirect/gst" onClick={() => setIsOpen(false)}>GST Return & Compliance</NavLink>
                                        <NavLink to="/services/indirect/notice" onClick={() => setIsOpen(false)}>Notice Handling</NavLink>
                                    </div>
                                </details>

                                {/* 5. All Type of Registrations */}
                                <details>
                                    <summary className="cursor-pointer py-1">All Registrations</summary>
                                    <div className="pl-4 flex flex-col gap-1 py-1 text-sm">
                                        <NavLink to="/services/registration/company" onClick={() => setIsOpen(false)}>Company Incorporation</NavLink>
                                        <NavLink to="/services/registration/gst" onClick={() => setIsOpen(false)}>GST Registration</NavLink>
                                        <NavLink to="/services/registration/partnership" onClick={() => setIsOpen(false)}>Partnership Firm</NavLink>
                                        <NavLink to="/services/registration/trust" onClick={() => setIsOpen(false)}>Trust Registration</NavLink>
                                    </div>
                                </details>

                                {/* 6. Other Services */}
                                <details>
                                    <summary className="cursor-pointer py-1">Other Services</summary>
                                    <div className="pl-4 flex flex-col gap-1 py-1 text-sm">
                                        <NavLink to="/services/other/project-report" onClick={() => setIsOpen(false)}>Project Report</NavLink>
                                        <NavLink to="/services/other/dsc" onClick={() => setIsOpen(false)}>Digital Signature</NavLink>
                                        <NavLink to="/services/other/web-development" onClick={() => setIsOpen(false)}>Web Development</NavLink>
                                        <NavLink to="/services/other/entity-selection" onClick={() => setIsOpen(false)}>Business Entity Selection</NavLink>
                                        <NavLink to="/services/other/business-succession" onClick={() => setIsOpen(false)}>Business Succession Planning</NavLink>
                                        <NavLink to="/services/other/financial-planning" onClick={() => setIsOpen(false)}>Financial Planning</NavLink>
                                        <NavLink to="/services/other/retirement-planning" onClick={() => setIsOpen(false)}>Retirement Planning</NavLink>
                                    </div>
                                </details>

                            </div>
                        </details>

                        {/* Knowledge Bank (flat) */}
                        <details className="w-full">
                            <summary className="py-2 cursor-pointer">Knowledge Bank</summary>
                            <div className="pl-4 flex flex-col gap-2 py-1 text-sm">
                                <NavLink to="/other-services/company-registration" onClick={() => setIsOpen(false)}>Company Registration</NavLink>
                                <NavLink to="/other-services/udhyam" onClick={() => setIsOpen(false)}>Udyam/MSME Cert.</NavLink>
                                <NavLink to="/other-services/digital-signature" onClick={() => setIsOpen(false)}>Digital Signature</NavLink>
                            </div>
                        </details>

                        <NavLink to="/about-us" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    </nav>
                </div>
            )}

        </div>
    )
}

export default Header;
