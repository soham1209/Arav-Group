import React from 'react'
import cal from '../../assets/cal.svg'
function PointCard() {
  return (
    <div className=" mx-auto p-5 text-left">
      <div className="bg-white rounded-3xl p-6 flex flex-col items-start shadow-[5px_5px_100px_10px_rgba(0,180,216,0.25)] ">
        <img
          src={cal}
          alt='cal'
          className="h-20 w-auto object-cover mb-2"
        />
        <h3 className="text-2xl font-semibold mb-2">Quick Response</h3>
        <p className="text-gray-600 mb-4 text-lg">We respond to your queries promptly - your satisfaction is our priority!</p>
      </div>
    </div>
  )
}
export default PointCard