'use client'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import AccordionMenu from './accordion-menu';


const Menubar = () => {
  const [isOpen, setOpen] = useState(false)
  const [menuItems, setMenuItems] = useState([
    { title: "Home", answer: "başlık" },
    { title: "Course", answer: "başlık" },
    { title: "Events", answer: "başlık" },
    { title: "Shop", answer: "başlık" },
    { title: "Pages", answer: "başlık" },
    { title: "Blogs", answer: "başlık" },
    { title: "Contact", answer: "başlık" },
  ])
  return (
    <>
      <div className=' xl:hidden flex justify-between items-center gap-2.5 px-3.5 py-3'>
        <div className='logo'>
          <a href="">
            <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg" alt="" className='w-32' />
          </a>
        </div>
        <div className='nav-slide flex items-center justify-between'>
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
      </div>
      <nav className={`menu-items ${isOpen ? 'transition-all duration-500 opacity-100 transform translate-x-0' : 'transition-all duration-500 opacity-0 transform -translate-x-full'}`}>
        <div className='pl-7'>
          <div className="max-w-md mx-auto transform transition-transform ease-in-out duration-500">
            <div>
              {/* {setOpen ? console.log('true'):console.log('false')} */}
              
             {
              isOpen ?  menuItems.map((item, index) => <AccordionMenu
                key={index}
                title={item.title}
                answer={item.answer}
              />): ''
             }
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menubar