import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import DropdownMenu from './dropdown-menu';
import { CiSearch } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

const Topbar = () => {
    return (
        <div className='mobile-top-bar xl:px-3 xl:mx-14'>
            <div className='mobile-top text-sm flex flex-wrap items-center  justify-center border-b xl:border-b-0 pt-3 pr-3  xl:justify-between xl:items-center  xl:pt-10 xl:pb-10' style={{ columnGap: "30px" }}>
                <div className='logo hidden xl:block'>
                    <a href="">
                        <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg" alt="" />
                    </a>
                </div>
                <div className='hidden xl:block ml-9 flex-1'>
                    <form className='form-inline border-2 p-1 w-full rounded-3xl' role='search'>
                        <div className='form-group w-full' >
                            <div className='input group relative flex flex-wrap items-stretch w-full'>
                                <div className=' top-4/2 right-0'><DropdownMenu /></div>
                                <div className='input'>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block border-0  sm:text-sm outline-none sm:leading-6 px-3.5 h-11 w-full" style={{ paddingLeft: "15px" }}
                                        placeholder="Find Your Courses..."
                                    />
                                </div>
                                <div className='button'>
                                    <button className='absolute top-4/2 right-0 bg-indigo-600 hover:bg-indigo-950 transition duration-300 ease-in-out text-white rounded-3xl px-3 py-5 font-medium h-full leading-none flex gap-x-2 items-center'><CiSearch className='text-2xl' />Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className='hidden  xl:inline-flex items-center gap-x-2'>
                    <div style={{width:"50px",height:"50px"}} className='rounded-3xl border-2 flex items-center justify-center text-indigo-600'><PiPhoneCallThin className='text-2xl'/></div>
                    <div className='flex flex-col'>
                        <span> Emergency Help!</span>
                        <a href="tel:+1212-226-3126" className='font-semibold'>+1212-226-3126</a>
                    </div>
                </div> */}
                <div className='flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-3 pr-3 pb-3.5 text-center text-sm xl:border-b-0'>
                <ul className='mobile-address flex flex-wrap items-center justify-center gap-x-3.5 m-0 p-0 leading-7 xl:hidden'>
                    <li className='flex items-center gap-1'><LuCalendarDays style={{ color: "#543ee8", fontSize: "14px" }} />tarih</li>
                    <li className='flex items-center gap-1'><SlLocationPin style={{ color: "#543ee8", fontSize: "14px" }} />457 Mott Street,NY 10013</li>
                    <li className='flex items-center gap-1'><MdOutlineWatchLater style={{ color: "#543ee8", fontSize: "14px" }} />Opening: Mon - Sat 8.00 - 18.00</li>
                </ul>
                <div className='header-icon-area relative flex items-center gap-x-9 h-full'>
                    <div className='flex gap-x-2.5 pt-2'>
                        <a href="" className='inline-block relative border text-sm font-medium rounded-3xl py-2.5 px-7 leading-6 tracking-wide  hover:bg-indigo-950 transition duration-300 ease-in-out hover:text-white'>Login</a>
                        <a href="" className='inline-block relative border text-sm font-medium rounded-3xl py-2.5 px-7 leading-6 tracking-wide bg-indigo-950 hover:bg-indigo-600 transition duration-300 ease-in-out text-white'>Sign Up</a>
                    </div>

                </div>
                </div>
           
            </div>
        </div>
    )
}

export default Topbar