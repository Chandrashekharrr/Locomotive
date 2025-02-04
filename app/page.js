"use client";
import React from 'react'
import localFont from "next/font/local";
import LocomotiveScroll from 'locomotive-scroll';
import { FaArrowDownLong } from "react-icons/fa6";

const neue = localFont({
  src: '../app/fonts/neueBold.otf',
});
const Neuemedium = localFont({
  src: '../app/fonts/Neuemedium.otf',
});
const NeueLight = localFont({
  src: '../app/fonts/NeueLight.otf',
});

const page = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-[#d4c9c9] w-full  p-5 md:px-10 md:py-7'>

      <div className=" nav flex justify-between uppercase text-base md:text-2xl">
        <h1 className={`${neue.className}`}>Locomotive.ca</h1>
        <h1 className={`${neue.className}`}>v4.x – Edition</h1>
      </div>

      <div className='w-full text-[12vw] md:text-[13vw] uppercase leading-[1.2] md:leading-none mt-28 md:mt-20'>
        <h1 className={`${Neuemedium.className}`}>Locomotive</h1>
        <h1 className={`${Neuemedium.className}`}>Scroll</h1>

        <div className={`${Neuemedium.className}   flex text-white `}>
          <h1>v</h1>
          <h1>4</h1>
          <h1>.</h1>
          <h1>x</h1>
        </div>

      </div>

      <div className='w-full h-[1px] bg-black'></div>

      <div className="parent w-full md:flex md:mt-10 md:items-center mt-10">
        <div className='text-sm md:text-xl  w-full md:w-1/2 '>
          <p className={`${Neuemedium.className}`}>A simple scroll library used by developers at Locomotive. Built as a layer on top of ayamflow's virtual-scroll, it provides smooth scrolling with support for parallax effects, toggling classes, and triggering event listeners when elements are in the viewport.</p>
        </div>

        <div className={`w-full mt-10 md:bg-green-500  gap-5 md:w-1/2 md:text-xl ${neue.className}`}>
          <div className='flex justify-between uppercase '>
            <h1>01. Speed Control</h1>
            <FaArrowDownLong />
          </div>
          <div className='w-full h-[1px] bg-black'></div>

          <div className='flex justify-between uppercase'>
            <h1>02. Scroll direction</h1>
            <FaArrowDownLong />
          </div>
          <div className='w-full h-[1px] bg-black'></div>

          <div className='flex justify-between uppercase'>
            <h1>03. Lerp effect</h1>
            <FaArrowDownLong />
          </div>
          <div className='w-full h-[1px] bg-black'></div>

          <div className='flex justify-between uppercase'>
            <h1>04. Fixed Elements</h1>
            <FaArrowDownLong />
          </div>
          <div className='w-full h-[1px] bg-black'></div>



        </div>

      </div>


    </div>
  )
}

export default page
