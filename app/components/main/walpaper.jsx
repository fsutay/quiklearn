'use client'
import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Parallax from './parallax';
const Walpaper = () => {

  return (
    <section className='bg-gray-100 walpaper relative'>
      <div className='mx-7 xl:flex items-center justify-between pt-24'>
        <div className=' flex flex-col lg:flex-row items-center justify-between container mx-auto text-center xl:text-start'>
          <div className='left-content flex flex-col xl:gap-6  justify-center'>
            <p className='relative  text-gray-700 text-sm  mb-2'>100% QUALITY COURSES</p>
            <h1 className="mb-6 relative  font-bold text-gray-800" style={{ fontSize: '44px' }}>
              Find Your Perfect Courses <br />And Improve Your &nbsp;

              <span className='relative z-10'>Skills
                <span className='absolute w-full h-full left-0 -z-10'>
                  <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/hero-shape-yellow.svg" alt="" />
                </span>
              </span>
              {/* <span className="before:content[''] before:absolute before:left-0 before:top-2/4 before:w-full before:h-full">Skills              </span> */}
              <span className='absolute xl:top-40 xl:left-48' style={{ top: '45px', right: '30px' }}>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/underline.svg" alt="" />
              </span>
            </h1>
            <p className='text-lg' >We Have <strong>40k+</strong> Online Courses & <strong>500K+</strong> Online Registered Student.</p>

            <a href="" className='relative'>
              <button
                className={`mx-auto xl:m-0 rounded-full px-10 py-4 text-sm flex items-center gap-2 mt-4 text-white bg-indigo-700 hover:bg-indigo-950 transition-all delay-100 ease-in-out`}
                style={{ height: '53px', width: '258px' }}
              >
                Explorer All Course
                <span className="text-2xl"><IoIosArrowRoundForward /></span>
              </button>

            </a>

          </div>
          <div className='right-content pt-12 px-3 flex-initial relative' style={{zIndex:1}}>
          <div className='hidden xl:block absolute bottom-0 top-0  w-full'><Parallax /></div>
            <img className='w-full h-auto object-cover ' src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-img-2.png" alt="" />
            <span className='hidden xl:block h-80 absolute top-2/4 right-0' style={{ backgroundImage: 'url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-13.svg)', backgroundRepeat: 'no-repeat' ,zIndex:-99,left:'200px',width:'500px'}}></span>
          </div>
        </div>
      </div>
      <svg className='hidden xl:absolute xl:block xl:bottom-0 xl:left-1/3' xmlns="http://www.w3.org/2000/svg" width="138" height="120" viewBox="0 0 138 120" fill="none"><path d="M6.3339 139.291C18.1163 146.588 46.5339 122.041 69.8064 84.4645C93.0789 46.8875 102.394 10.5099 90.6112 3.21269C78.8288 -4.08448 50.4112 20.4621 27.1387 58.0391C3.86617 95.616 -5.44846 131.994 6.3339 139.291Z" stroke="#41D6BB" strokeWidth="2" strokeMiterlimit="10"></path><path d="M26.7239 151.919C38.5063 159.216 66.9239 134.67 90.1964 97.0926C113.469 59.5156 122.784 23.138 111.001 15.8408C99.2188 8.54366 70.8012 33.0903 47.5287 70.6672C24.2562 108.244 14.9415 144.622 26.7239 151.919Z" stroke="#41D6BB" strokeWidth="2" strokeMiterlimit="10"></path><path d="M47.1214 164.552C58.9037 171.849 87.3213 147.302 110.594 109.725C133.866 72.1484 143.181 35.7708 131.399 28.4736C119.616 21.1764 91.1987 45.723 67.9262 83.3C44.6537 120.877 35.339 157.255 47.1214 164.552Z" stroke="#41D6BB" strokeWidth="2" strokeMiterlimit="10"></path></svg>
    </section>
  )
}

export default Walpaper