"use client";
import {IoEarthSharp} from "react-icons/io5";
import {useEffect} from "react";
import Link from "next/link";


const HeroElement = () => {

  return (

      <div
        className="w-[90%] h-[410px] relative rounded-xl px-7 pt-2 pb-20 space-y-8 py-20 md:space-y-10 md:px-10 text-black bg-gradient-to-br from-blue-600 to-pink-500 my-24">

        <div className="flex items-center justify-between ">
          <div className="">
            <i className="text-big-stone text-3xl hidden">
              <IoEarthSharp color="white"/>
            </i>
          </div>
          <Link
            href="#calculate"
            className="bg-background rounded-full px-4 py-1 text-white relative top-[21rem] text-lg "
          >
            Calculate
          </Link>
        </div>
        <div className="flex justify-start">
          <div className="hidden max-w-[150px] h-full lg:flex flex-col flex-2 text-neutral-100">
            <p className="">Make a difference, reduce your digital emissions.</p>
          </div>
          <div className="md:min-w-[750px]">
            <h1
              className={`font-medium text-4xl px-0  md:min-w-[750px] xs:text-5xl uppercase text-big-stone z-1 md:text-7xl xs:px-10 md:px-20 md:pb-10 w-8/12 }  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 h-fit`}
            >
              Estimate your websites carbon
              <span className="flex items-start justify-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-40">
              footprint
              <span className="hidden pl-2 text-base  lg:inline w-full normal-case max-w-[270px] text-neutral-50 relative top-2.5">
                find out the impact of your website on the planet
              </span>
            </span>
            </h1>
          </div>
        </div>
      </div>

  );
};

export default HeroElement;