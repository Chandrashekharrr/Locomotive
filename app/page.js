"use client";
import React from "react";
import localFont from "next/font/local";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowDownLong } from "react-icons/fa6";
import { Truculenta } from "next/font/google";

const neue = localFont({
  src: "../app/fonts/neueBold.otf",
});
const Neuemedium = localFont({
  src: "../app/fonts/Neuemedium.otf",
});
const NeueLight = localFont({
  src: "../app/fonts/NeueLight.otf",
});

const page = () => {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions:{
      smoothTouch:true,
        syncTouch:true,
        orientation:'vertical',
        
      

    }
  });

  return (
    <div className="bg-[#d4c9c9] w-full  p-5 md:px-10 md:py-7">
      <div className=" nav flex justify-between uppercase text-base md:text-2xl">
        <h1 className={`${neue.className}`}>Locomotive.ca</h1>
        <h1 className={`${neue.className}`}>v4.x – Edition</h1>
      </div>

      <div className="w-full text-[12vw] md:text-[13vw] uppercase leading-[1.2] md:leading-none mt-28 md:mt-20">
        <h1 className={`${Neuemedium.className}`}>Locomotive</h1>
        <h1 className={`${Neuemedium.className}`}>Scroll</h1>

        <div className={`${Neuemedium.className}   flex text-white `}>
          <h1>v</h1>
          <h1>4</h1>
          <h1>.</h1>
          <h1>x</h1>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black"></div>

      <div className="parent w-full md:flex md:mt-10 md:items-center mt-10">
        <div className="text-sm md:text-xl  w-full md:w-1/2 ">
          <p className={`${Neuemedium.className} md:w-1/2 `}>
            A simple scroll library used by developers at Locomotive. Built as a
            layer on top of ayamflow's virtual-scroll, it provides smooth
            scrolling with support for parallax effects, toggling classes, and
            triggering event listeners when elements are in the viewport.
          </p>
        </div>

        <div
          className={`w-full mt-10  flex flex-col gap-2 md:w-1/2 md:text-xl ${neue.className}`}
        >
          <div className="flex justify-between uppercase hover:text-white ">
            <h1 className="">01. Speed Control</h1>
            <FaArrowDownLong />
          </div>
          <div className="w-full h-[1px] bg-black"></div>

          <div className="flex justify-between uppercase hover:text-white">
            <h1>02. Scroll direction</h1>
            <FaArrowDownLong />
          </div>
          <div className="w-full h-[.5px] bg-black"></div>

          <div className="flex justify-between uppercase hover:text-white">
            <h1>03. Lerp effect</h1>
            <FaArrowDownLong />
          </div>
          <div className="w-full h-[1px] bg-black"></div>

          <div className="flex justify-between uppercase hover:text-white">
            <h1>04. Fixed Elements</h1>
            <FaArrowDownLong />
          </div>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      <div className="w-full md:flex md:justify-between mt-28 md:mt-48 ">
        <div className="w-full md:w-[40vw] md:mt-72">
          <h1 className={`text-2xl ${Neuemedium.className} `}>01.</h1>
          <h1 className={`text-2xl ${Neuemedium.className} `}>Speed control</h1>
          <p className={`text-sm ${Neuemedium.className} mt-5 `}>
            Each element can be animated at a different speed. <br />
            You get to choo-choo-choose!
          </p>
        </div>

        <div className="w-full md:w-[60vw] mt-28 md:mt-0 ">
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-52 mt-64 md:mt-[40rem] md:ml-[45rem] rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            4x
          </div>

          <h1
            className={`md:text-2xl text-xl ${neue.className} absolute mt-[29rem] ml-[7rem] md:mt-[62rem] uppercase md:ml-[25rem] text-white `}
          >
            speed x2
          </h1>

          <img
            src="/first.jpg"
            alt=""
            className="h-[140vw] md:h-[70vw] md:w-full "
          />
        </div>
      </div>

      <div className="w-full mt-36 md:flex md:justify-between ">
        <div className="w-full md:w-1/2 ">
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-60 mt-20 md:mt-[20rem] md:ml-[35rem] rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            1x
          </div>
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-1 mt-[34rem] md:mt-[48rem] md:ml-[-2rem] rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            3x
          </div>

          <h1
            className={`md:text-2xl text-xl ${neue.className} absolute mt-[32rem] ml-[7rem] md:mt-[48rem] uppercase md:ml-[15rem] text-white `}
          >
            speed x4
          </h1>

          <img
            src="./second.jpg"
            alt=""
            className="md:w-[40vw] md:h-[120vh] h-[80vh]"
          />
        </div>

        <div className="w-full md:w-1/2 ">
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-1 md:mt-[23rem] mt-[-2rem] md:ml-36 rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            2x
          </div>
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-[16rem] md:mt-[45rem] md:ml-[36rem] mt-[10rem] rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            6x
          </div>
          <div
            className={`w-20 h-14  md:w-28 md:h-20 ml-1 mt-[23rem] md:mt-[52rem] md:ml-36  rounded-[70%] bg-black absolute text-white flex justify-center items-center md:text-2xl   ${Neuemedium.className} `}
          >
            9x
          </div>

          <h1
            className={`md:text-2xl text-xl ${neue.className} absolute mt-[20rem] ml-[7rem] md:mt-[50rem] uppercase md:ml-[25rem] text-white `}
          >
            speed x6
          </h1>

          <img
            src="./third.jpg"
            alt=""
            className="w-[30rem] h-96 mt-36 md:ml-48 md:mt-[30rem]"
          />
        </div>
      </div>

      <div className="w-full mt-[30rem] h-[1000px] relative  ">
        <div className="w-full md:w-1/2 sticky top-40 z-0 ">
          <div className="w-full md:w-[40vw] md:mt-72">
            <h1 className={`text-2xl ${Neuemedium.className} `}>02.</h1>
            <h1 className={`text-2xl ${Neuemedium.className} `}>
              Scroll direction
            </h1>
            <p className={`text-sm ${Neuemedium.className} mt-5 `}>
              And if that wasn't enough, make' me go backwards. <br />
              Or upwards. Or downwards!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-30rem] h-screen w-full">
        <h1
          data-scroll data-scroll-direction="horizontal" data-scroll-position='100,50%'
          className={`bg-white  uppercase text-[9vw] rotate-[2deg]    ${neue.className} `}
        >
          Ok, enough!!!!
        </h1>
        <h1
          
          className={`bg-white  uppercase text-[9vw] rotate-[2deg]   ${neue.className} `}
        >
          Ok, enough!!!!
        </h1>
        <h1
          className={`bg-white  uppercase text-[9vw] rotate-[2deg]   ${neue.className} `}
          
        >
          Ok, enough!!!!
        </h1>
       
      </div>

      <div className="bg-green-400 w-full h-screen mt-96">afefwes</div>
      <div className="bg-green-400 w-full h-screen mt-96">afefwes</div>
    </div>
  );
};

export default page;
