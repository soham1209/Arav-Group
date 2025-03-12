import React from 'react'
import tax from '../../assets/tax.svg'
function ServiceCard() {

      return (
            <div className="  px-4 text-center z-10">
                <div  className="bg-white rounded-3xl p-6 flex flex-col items-center shadow-[0_5px_60px_0_#0077B6]">
                  <img
                    src={tax}
                    alt='Income Tax'
                    className="h-70 w-auto object-cover"
                  />
                  <h3 className="text-3xl font-bold mb-2">Income Tax</h3>
                  <p className="text-textCor text-xl mb-4 ">Your ITR-1/ITR-2/ITR-3 and ITR-6 forms will be  prepared by Arav Groups (India) Tax Returns for Professionals within time limit.</p>
                  <button className="font-semibold text-xl hover:text-blue2 duration-300 ease-in-out ">
                    Discover more
                  </button>
                </div>
            </div>


      );
    }


export default ServiceCard