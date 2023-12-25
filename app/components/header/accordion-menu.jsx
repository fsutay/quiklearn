import React, { useState } from "react";

const AccordionMenu = ({ title, subtitle }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isHoverTitle, setIsHoverTitle] = useState(false);


  const onEnterTitle=()=>{
    setIsHoverTitle(true);
    console.log("onEnter");
  }
  const onLeaveTitle=()=>{
    setIsHoverTitle(false);
    console.log("onLeave");
  }
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span onMouseEnter={onEnterTitle} onMouseLeave={onLeaveTitle} className={`${isHoverTitle ? 'before:content-["-"] before:mr-3 before:text-indigo-600  transition-all duration-500 translate-x-6 text-indigo-600' : ''}`}>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{subtitle}</div>
      </div>
    </div>
  );
};

export default AccordionMenu;
