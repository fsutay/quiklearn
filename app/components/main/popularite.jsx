'use client'
import React, { useState } from 'react'

const Popularite = () => {
    const [logos, setLogos] = useState([
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img14.svg'},
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img13.svg'},
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img15.svg'},
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img16.svg'},
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img17.svg'},
        { src: 'https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/brand-img18.svg'}

    ])


    return (
        <section className='popularite'>
            <div className='flex flex-col items-center justify-center lg:flex-row pt-20 xl:mx-36'>
                <div className='popularite-content flex flex-col items-center gap-5 mb-10'>
                    <div className='popularite-text text-center text-2xl text-gray-700 px-4 mb-7'>
                        <p>Trusted By Over <strong>13,400</strong> Students & Organisation</p>
                        <p>Recommended Around The <br />World</p>
                    </div>
                        <div className='image-container'>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-x-32 gap-y-8 pb-20 border-b'>
                                {
                                    logos.map((item, index) => (
                                        <div
                                            key={index}
                                            className='flex flex-col items-center justify-center h-full saturate-0 hover:saturate-100 hover:transition-all delay-100 ease-out'
                                        >
                                            <a href="">
                                                <img src={item.src} alt="" />
                                            </a>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                     
                    </div>

                </div>
              
           
        </section>
    )
}

export default Popularite