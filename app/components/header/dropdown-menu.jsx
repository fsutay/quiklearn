'use client'
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const DropdownMenu = () => {
    const [list, setList] = useState([
        { name: "All" },
        { name: 'Art & Design' },
        { name: 'Business' },
        { name: 'Data Science' },
        { name: 'Development' },
        { name: 'Finance' },
        { name: 'Health & Fitness' },
        { name: 'Technology' }])

        const [show,setShow]=useState(false)

    return (
        <>
            <button onClick={()=>setShow(prev=>!prev)} type="button" className='relative pr-6 pl-6  h-11 min-w-40 text-sm text-gray-800 flex items-center justify-between xl:p-0 xl:justify-center'>All Categories
                <MdKeyboardArrowDown className="text-xl ml-2" />
            </button>
            {show &&  <div className="absolute top-8 left-0 z-10 mt-2 w-44 pt-5 origin-top-right rounded-md bg-white  focus:outline-none list-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" style={{boxShadow:'rgb(0 0 0/.1)0 8px 24px' }}>
                <div className="py-1" role="none">
                    {list.map((item, index) => (
                        <li className="py-0 px-5 mb-3 text-sm text-gray-500" key={index}><a href="#">{item.name}</a></li>
                    ))}
                  
                </div>
            </div>}
           
        </>

    )
}

export default DropdownMenu