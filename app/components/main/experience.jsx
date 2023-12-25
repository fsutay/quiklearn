import React from 'react'

const Experience = () => {
    return (
        <section className='experience px-3 pt-28 mx-7'>
            <div className='xl:flex gap-x-6'>
                <div className='left-content flex flex-col gap-y-4'>
                    <div className='experiences-years-of p-10 bg-yellow-400 rounded-md text-center xl:w-64 xl:h-32 xl:ml-10'>
                        <h1 className='font-bold text-3xl'>12 Years Of</h1>
                        <p className='text-xl'>Experiences</p>
                    </div>

                    <div className='experience-image'>
                        <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-1.png" alt="" />
                    </div>
                </div>
                <div className='right-content flex flex-col gap-y-4'>
                    <div className='rounded-md'>
                        <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-2.png" alt="" />
                    </div>
                    <div className='counter flex w-full items-center xl:justify-between xl:gap-1 xl:w-64  gap-32 border py-6 px-2 rounded-md '>
                        <div className='relative -top-2'>
                            <img src="./img2.png" className='rounded-full w-10 absolute top-4 left-7 z-40' alt="" />
                            <img src="./img3.png " className='rounded-full w-10 absolute top-7' alt="" />
                            <img src="./img1.png " className='rounded-full w-10' alt="" />

                        </div>
                        <div>
                            <p className='font-semibold text-4xl'>35K+</p>
                            <p>Positive Reviews</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='main-goal'>

            </div>

        </section>
    )
}

export default Experience

