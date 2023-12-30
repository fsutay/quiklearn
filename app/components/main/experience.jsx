'use client'
import React from 'react'
import CountUp, { useCountUp } from "react-countup";
import { FaUserGraduate } from "react-icons/fa";
import { PiMonitorPlay } from "react-icons/pi";

const Experience = () => {

    return (
        <div className="experiences">
            <div className="mx-auto container  flex flex-col lg:flex-row items-center md:items-start justify-center p-6 gap-x-8">
                <div className="w-full relative md:flex gap-8">
                    <div className='left-content flex flex-col items-center'>
                        <div className='experiences-years-of p-8 bg-yellow-400 rounded-md text-center  w-full xl:w-64 xl:h-32  mb-3'>
                            <h1 className='font-bold text-3xl'>12 Years Of</h1>
                            <p className='text-xl'>Experiences</p>
                        </div>
                        <div className='experience-image'>
                            <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-1.png" className='mx-auto' alt="" />
                        </div>
                    </div>
                    <div className='right-content flex flex-col items-center'>
                        <div className='rounded-md mb-5'>
                            <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-2.png" className='mx-auto' alt="" />
                        </div>
                        <div className='counter flex gap-12 border  w-full py-7  ps-8'>
                            <div className=' relative'>
                                <div><img src="./img2.png" className='rounded-full w-9' alt="" />
                                    <img src="./img3.png " className='rounded-full absolute left-0 top-5  w-9' alt="" />
                                    <img src="./img1.png " className='rounded-full absolute top-3 left-6 w-9 z-40' alt="" />
                                </div>

                            </div>
                            <div className='w-full'>
                                <span className='text-3xl font-bold'>
                                    <CountUp start={0} end={35} delay={3} enableScrollSpy />K
                                </span>
                                <p>Positive Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <p className="text-sm text-grey pt-8">WHAT’S OUR MAIN GOAL</p>
                    <div>
                        <h2 className="text-4xl text-purple font-semibold relative">
                            Take The Next Step Toward Your
                            Personal And Professional Goals With Quiklearn
                            <span className='absolute'>
                                <svg width="167" height="15" viewBox="0 0 167 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.78836 10.0376C5.11112 9.99638 6.43207 9.89746 7.74764 9.82495L9.35409 9.71188L16.4429 9.19172C19.246 8.98186 22.0698 8.76787 24.9141 8.54973L37.0183 7.60031L39.7908 7.40365L46.8424 6.88465L53.8951 6.40234C54.8192 6.33678 55.7555 6.26036 56.6613 6.20587L67.9172 5.55573L74.8419 5.15611C75.7424 5.12802 76.6473 5.04209 77.5536 5.00332L88.4361 4.53797L99.1816 4.06639C100.132 4.03676 101.045 4.00828 102.02 3.97787L109.036 3.73278L119.933 3.33518L123.504 3.2238L130.956 2.99136L131.577 2.97199C125.974 3.20973 120.37 3.45097 114.767 3.69571L107.772 4.03981C106.766 4.07118 105.753 4.10276 104.742 4.17102L94.5897 4.71854L82.8547 5.35215C82.1964 5.37268 81.5396 5.44039 80.8884 5.48693L74.6363 5.92853L61.9644 6.81697C61.3434 6.83634 60.7242 6.91336 60.1044 6.96942L53.9056 7.52479L42.8347 8.52068C41.8181 8.61011 40.8022 8.72574 39.7861 8.83088L32.6982 9.57663L23.682 10.4822L11.1481 11.8018L8.13691 12.1161C6.34009 12.3033 4.55146 12.5532 2.76201 12.7769C2.71184 12.7728 2.66111 12.7779 2.61321 12.7917C2.56532 12.8055 2.52136 12.8278 2.4843 12.857C2.44724 12.8862 2.41792 12.9217 2.39831 12.9612C2.37869 13.0006 2.36924 13.043 2.37058 13.0856C2.37193 13.1281 2.38403 13.1699 2.40609 13.208C2.42814 13.2461 2.45964 13.2797 2.49848 13.3066C2.53731 13.3334 2.58257 13.3529 2.63125 13.3637C2.67992 13.3745 2.73087 13.3764 2.78068 13.3692L4.75162 13.3812C4.6715 13.5271 4.63186 13.6863 4.63575 13.8465C4.64649 14.1352 4.79182 14.4074 5.04015 14.604C5.28848 14.8006 5.61972 14.9057 5.96184 14.8964C11.0891 14.4637 16.2156 14.01 21.3512 13.6452L34.7238 12.7034L49.504 11.6495L54.1619 11.3154C54.609 11.3014 55.0548 11.2455 55.5016 11.2211L79.3321 9.95314L92.0665 9.27263C93.6056 9.19314 95.1385 9.11385 96.6718 9.04504L121.049 7.96464L131.496 7.49712C134.47 7.3624 137.444 7.2539 140.416 7.06677L147.78 6.60098C149.02 6.52554 150.262 6.4606 151.452 6.36051L159.79 5.62301C159.641 5.85652 159.607 6.12906 159.695 6.38146C159.784 6.62603 159.982 6.83077 160.248 6.95185C160.383 7.01523 160.533 7.0543 160.687 7.06663C160.841 7.07897 160.997 7.0643 161.145 7.02354C161.76 6.79975 162.374 6.57072 162.945 6.33781L162.908 6.33897L163.037 6.28773L163.19 6.22523L163.134 6.22697L164.086 5.85626L165.087 5.46302C165.443 5.31551 165.792 5.14198 166.135 4.97389C166.323 4.86966 166.477 4.72608 166.581 4.55726C166.684 4.38844 166.734 4.2002 166.726 4.01105C166.718 3.77337 166.618 3.54519 166.442 3.36126C166.266 3.17733 166.022 3.04773 165.749 2.9922C165.431 2.9549 165.125 2.9277 164.808 2.90613L164.596 2.91272C164.385 2.9193 164.168 2.92608 163.977 2.96878C163.505 2.9835 163.035 3.08733 162.564 3.12826L161.405 3.23786L158.306 3.5234L157.5 3.59576C157.595 3.49864 157.663 3.38549 157.701 3.2642C157.747 3.1682 157.771 3.06602 157.773 2.96292L157.803 2.73637C157.798 2.64147 157.774 2.54813 157.732 2.46051L157.812 2.42654C158.002 2.32452 158.16 2.18437 158.271 2.01871C158.37 1.8507 158.419 1.66565 158.416 1.47904C158.407 1.28403 158.339 1.09474 158.218 0.929062L158.006 0.715312C157.842 0.58485 157.64 0.493453 157.42 0.450286C157.018 0.344057 156.595 0.302095 156.173 0.326541C155.831 0.337194 155.477 0.348236 155.136 0.385096L153.634 0.431972C152.926 0.454054 152.224 0.475942 151.516 0.498025L145.927 0.672356C144.169 0.727174 142.412 0.781991 140.654 0.836809L135.86 0.986346C129.488 1.18508 123.124 1.41508 116.754 1.66623L102.427 2.30199C100.291 2.36862 98.1618 2.47699 96.0268 2.58556L81.677 3.29023L77.5868 3.49126C76.7919 3.51605 76.0047 3.58783 75.2106 3.63883L61.0346 4.5322L56.6919 4.80931C55.8854 4.8607 55.0732 4.92801 54.267 4.98988L40.2149 6.06827C37.7902 6.25408 35.3722 6.45542 32.948 6.65695L20.5174 7.70575C16.9277 8.0066 13.3373 8.28648 9.74689 8.56636L8.04174 8.70349L5.28218 8.91548C4.46343 8.9725 3.64418 9.01379 2.7991 9.02441C2.75739 8.93407 2.68315 8.85729 2.58676 8.80479C2.49037 8.7523 2.37664 8.72672 2.26149 8.73163C1.73478 8.78478 1.2084 8.84842 0.682025 8.91206C0.559585 8.92296 0.443358 8.96427 0.34807 9.03076C0.252783 9.09725 0.182723 9.18591 0.146768 9.28553C0.113015 9.41181 0.139832 9.54372 0.221335 9.65232C0.302839 9.76092 0.432374 9.83735 0.581524 9.86484L1.27515 9.97961C1.5056 10.0124 1.73894 10.0297 1.973 10.0313C2.57688 10.0597 3.1858 10.0512 3.78836 10.0376ZM149.053 3.8225L151.37 3.75025C151.442 3.89418 151.552 4.02181 151.692 4.12319C151.395 4.15346 151.097 4.17848 150.8 4.19826L149.112 4.30336L141.735 4.75906C140.612 4.83081 139.49 4.91828 138.366 4.96907L133.096 5.20166L121.054 5.73993L97.6759 6.7839C92.0891 7.03161 86.5046 7.3527 80.9194 7.65283L55.7486 8.99932C54.067 9.09375 52.3806 9.23554 50.6998 9.35617L36.3975 10.3847L22.3617 11.3891L21.0592 11.4822L24.8395 11.1124L38.0464 9.84528L42.6574 9.4024L45.0381 9.20223L58.7782 8.08635C59.671 8.01128 60.5634 7.92573 61.4629 7.8662L65.3647 7.60284L79.5402 6.69374L82.6421 6.4973C82.9154 6.48878 83.1886 6.48025 83.4681 6.47154L85.6591 6.36647L99.8665 5.67674C102.045 5.57206 104.211 5.46252 106.409 5.37823C113.456 5.1112 120.496 4.82865 127.519 4.58336C134.703 4.31732 141.881 4.05147 149.06 3.82231L149.053 3.8225Z" fill="#FFCD1F" />
                                </svg>

                            </span>
                        </h2>
                    </div>
                    <p className="text-base text-grey">When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make A Type Specimen Book Has Survived When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make.</p>
                    <div className='expert'>
                        <div className='flex items-center gap-x-8 mb-5'>
                            <div className='bg-indigo-600 p-6 rounded-2xl'>
                                <FaUserGraduate className='text-white text-5xl hover:translate-y-24 transition-all delay-75 ease-in-out' /></div>
                            <div>
                                <p className='font-bold'>Learn From Experts</p>
                                <p className='text-sm'>  Motype Specimen Book Has Survived When <br />
                                    An Unknown Printer Took</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-8'>
                            <div className='bg-indigo-600 p-6 rounded-2xl'><PiMonitorPlay className='text-white text-5xl' /></div>
                            <div>
                                <p className='font-bold'>Learn From Experts</p>
                                <p className='text-sm'>  Motype Specimen Book Has Survived When <br />
                                    An Unknown Printer Took</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience

