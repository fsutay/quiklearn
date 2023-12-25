'use client'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import AccordionMenu from './accordion-menu';
import DropdownMenu from './dropdown-menu';
import { GoShareAndroid } from "react-icons/go";
import { PiPhoneCallThin } from "react-icons/pi";



const Menubar = () => {
  const [isOpen, setOpen] = useState(false)
  const [onHover, setOnHover] = useState(false)
  const handleHover = () => {
    setOnHover(true)
    console.log('çalıştı')
  }

  const [menuItems, setMenuItems] = useState([
    { title: "Home", subtitle: ['Home 01'] },
    { title: "Course", subtitle: ['Home 01'] },
    { title: "Events", subtitle: ['Home 01'] },
    { title: "Shop", subtitle: ['Home 01'] },
    { title: "Pages", subtitle: ['Home 01'] },
    { title: "Blogs", subtitle: ['Home 01'] },
    { title: "Contact", subtitle: ['Home 01'] },
  ])
  return (
    <div className='menubar relative'>
      <div className='flex justify-between items-center gap-2.5 px-3.5 py-3 xl:px-3 xl:mx-7 xl:gap-2.5'>
        <div className='logo xl:hidden'>
          <a href="">
            <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg" alt="" className='w-32' />
          </a>
        </div>
        <div className='hidden xl:inline-flex items-center justify-center border gap-x-3.5 rounded-3xl font-medium px-3 py-1'>
          <span><GoShareAndroid /></span>
          <DropdownMenu />
        </div>
        <div className='nav-slide xl:hidden flex items-center justify-between'>
          <div className='menu'>
            {/* <Hamburger toggled={isOpen} toggle={setOpen} direction="right" color='#4f536c' /> */}
            <Hamburger onToggle={toggled => {
              if (toggled) {
                // open a menu
                setOpen(true);
              } else {
                // close a menu
                setOpen(false);
              }
              console.log(isOpen);

            }} />

          </div>
          <div className='search'>
            <CiSearch className='text-4xl cursor-pointer' />
          </div>
        </div>
        <div className='emargency hidden xl:flex gap-x-4 items-center justify-center'>
          <div className="flex gap-x-2 items-center justify-between after:content-['|']" >
            <div className='phone-icon border rounded-full flex items-center justify-center' style={{ width: '50px', height: '50px' }}><PiPhoneCallThin className='text-2xl text-indigo-600' /></div>
            <div className='phone-no flex flex-col'>
              <span>Emergency Help!</span>
              <a href="tel:+1212-226-3126" className='font-medium hover:text-indigo-600'>+1212-226-3126</a>
            </div>
          </div>
          <div className="item-icon relative">
            <a href="">
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.463 6.02421 11.4664 6.02765 11.4698 6.03106L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM13.4698 8.03034C13.7627 8.32318 14.2376 8.32309 14.5304 8.03014C14.8233 7.7372 14.8232 7.26232 14.5302 6.96948L13.4698 8.03034ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM11.4698 6.03106L13.4698 8.03034L14.5302 6.96948L12.5302 4.97021L11.4698 6.03106Z" fill="#1C274C" />
              </svg>
              <span className="flex items-center justify-center absolute w-5 h-5  rounded-full bg-yellow-500 text-sm" style={{ top: '-6px', left: '-11px' }}>0</span>
            </a>
          </div>
          <span>|</span>
          <div>
            <div className="cart relative gap-1" onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)}>
              <a href="" className='flex'>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.41056 6V5.28571C5.41056 4.14907 5.89409 3.05898 6.75478 2.25526C7.61546 1.45153 8.7828 1 10 1C11.2172 1 12.3845 1.45153 13.2452 2.25526C14.1059 3.05898 14.5894 4.14907 14.5894 5.28571V6M6.17547 13.8571H13.8245M2.19948 9.41429L1.00928 19.4143C0.985622 19.6139 1.00731 19.816 1.07294 20.0073C1.13857 20.1986 1.24666 20.3748 1.39016 20.5244C1.53366 20.6741 1.70934 20.7938 1.90573 20.8757C2.10212 20.9577 2.31481 21 2.52992 21H17.4701C17.6852 21 17.8979 20.9577 18.0943 20.8757C18.2907 20.7938 18.4663 20.6741 18.6098 20.5244C18.7533 20.3748 18.8614 20.1986 18.9271 20.0073C18.9927 19.816 19.0144 19.6139 18.9907 19.4143L17.8005 9.41429C17.7591 9.06473 17.581 8.74173 17.3005 8.50713C17.0199 8.27254 16.6565 8.14283 16.2799 8.14286H3.72011C3.3435 8.14283 2.98011 8.27254 2.69954 8.50713C2.41896 8.74173 2.24091 9.06473 2.19948 9.41429Z" stroke="#4F536C" strokeWidth="1.5"></path>
                </svg>
                <span className="flex items-center justify-center absolute w-5 h-5  rounded-full bg-yellow-500 text-sm" style={{ top: '-6px', left: '-11px' }}>0</span>
                <span>$0.00</span>
              </a>
              {/* <div className='popup absolute right-0 top-full overflow-y-auto text-left px-8 py-5 opacity-0 invisible scale-y-0 origin-top-left z-50'style={{width:'340px',maxHeight:'70vh',borderRadius:'0 0 6px 6px',transition: 'all .4s cubic-bezier(.3, .02, 0, .6)'}}>
                <ul>
                  <li>
                    <h5>Your cart is empty</h5>
                  </li>
                </ul>
              </div> */}


              <div className={`popup absolute top-7  text-left px-8 py-5 ${onHover ? 'opacity-100 bg-white' : 'opacity-0'}`} style={{ width: '340px', maxHeight: '70vh', borderRadius: '0 0 6px 6px', transition: 'all .4s cubic-bezier(.3, .02, 0, .6)',boxShadow: '0 0 90px rgb(0 0 0/.1)',top:'30px',left:'-280px'}}>
                <ul>
                  <li>
                    <h5 className='font-semibold'>Your cart is empty</h5>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div >
      <nav className={`menu-items xl:hidden ${isOpen ? 'transition-all duration-500 opacity-100 transform translate-x-0' : 'transition-all duration-500 opacity-0 transform -translate-x-full'}`}>
        <div className='pl-7'>
          <div className="max-w-md mx-auto transform transition-transform ease-in-out duration-500">

            {
              isOpen ? menuItems.map((item, index) => <AccordionMenu
                key={index}
                title={item.title}
                subtitle={item.subtitle}
              />) : ''
            }


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menubar