import React from 'react'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

const Parallax = () => {
    return (
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} useWindowMouseEvents={true} className=' w-full h-full'>
                <MouseParallaxChild factorX={0.1} factorY={0.2} className='absolute right-36 top-14  -z-10 '>
                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-11.svg" alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.4} factorY={0.4} className='absolute  -z-10' style={{ right: '340px', top: '70px' }}>
                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/hero-shape-14.svg" alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.4} factorY={0.4} className='absolute  -z-10' style={{ top: '30%', left: 40 }}>
                    <img src="./hero-shape-10.png" alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.2} factorY={0.2} className='absolute  -z-10' style={{ bottom: '15%', left: 80 }}>
                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/about-shape-2.svg" alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.3} factorY={0.3} className='absolute z-40' style={{ right: 0, bottom: 0 }}>
                    <img src="./hero-shape-12.png" alt="" />
                </MouseParallaxChild>
            </MouseParallaxContainer>
      
    )
}
export default Parallax
