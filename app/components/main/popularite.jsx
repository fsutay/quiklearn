import React from 'react'

const Popularite = () => {
    return (
        <section className='popularite '>
            <div className='container flex flex-col items-center justify-center lg:flex-row' style={{marginLeft:'135px',marginRight:'135px',paddingTop:'80px'}}>
                <div className='popularite-content flex flex-col items-start gap-5 mb-10 lg:pb-0'>
                    <div className='popularite-text'>
                    <p>Trusted By Over 13,400 Students & Organisation</p>
                    <p>Recommended Around The World</p>
                    </div>
                    <div className='image-popularite'>
                        <div className='image-container'>
                            <div className='image-row'>
                                <div className='grid grid-cols-1'>
                                    <div>
                                        <a href="">
                                            <img src="./brand-img-13.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Popularite