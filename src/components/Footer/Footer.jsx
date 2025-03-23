import React from 'react'
import { Link } from 'react-router'

import { w, i, x } from '../../assets/index'

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About us</h2>
          <p className="text-sm text-gray-300">
            Finotax Solutions provides solutions to people looking for low-tax investment
            opportunities, specifically in India. They aim to discover new ways to save money on
            taxes by investing in businesses with high return potential. Seeking advice on optimizing
            tax savings, they explore alternative approaches to familiar financial practices.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Link</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">GST Filling</a></li>
            <li><a href="#" className="hover:text-gray-400">Income Tax</a></li>
            <li><a href="#" className="hover:text-gray-400">Accounting Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Other Service</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-gray-300">sohanmsi@gmail.com</p>
          <p className="text-sm text-gray-300">Abcdeef Ghjklmno P.M Road, pqrst wvxyz 40004</p>
          <p className="text-sm text-gray-300">+91 9789027899</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <Link to="#">
              <img className="max-w-8" src={w} alt="wa" />
            </Link>
            <Link to="#">
              <img className='max-w-8' src={i} alt="ig" />
            </Link>
            <Link to="#">
              <img className='max-w-8' src={x} alt="x" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer