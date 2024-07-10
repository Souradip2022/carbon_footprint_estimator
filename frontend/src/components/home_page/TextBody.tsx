import React from 'react';

function TextBody() {
  const border = "border-amber-300 border-2"

  return (
    <div
      className="h-fit w-full my-20 px-8 flex flex-col justify-center items-center relative ">
      <div className=" h-fit md:w-[750px] lg:w-[800px] px-8 flex flex-col justify-center items-center relative  gap-y-2">

        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 from-10% via-green-300 via-[percentage:20%_70%] to-green-500 to-100%  md:h-[70px] flex justify-center items-center
      relative md:self-start">
          <span className="md:text-[65px] text-3xl font-bold font-sans md:tracking-wide tracking-normal">Leaving</span>
        </div>

        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 from-15% via-green-300 via-[percentage:20%_70%] to-green-500 to-100% tracking-wider md:h-[70px] flex justify-center items-center
      relative md:self-end">
          <span className="md:text-[65px] text-[30px] font-bold font-sans md:tracking-wide tracking-normal">a Green Footprint</span>
        </div>

        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 from-10% via-green-300 via-[percentage:20%_70%] to-green-500 to-100%  md:h-[70px] flex justify-center items-center
      relative md:self-end">
          <span className="md:text-[65px] text-3xl font-bold font-sans md:tracking-wider tracking-normal">for a Better Future</span>
        </div>

        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 from-10% via-green-300 via-[percentage:20%_70%] to-green-500 to-100% md:h-[70px] flex justify-center items-center
      relative md:self-end">
          <span className="md:text-[65px] text-3xl font-bold font-sans md:tracking-wide tracking-normal">Together.</span>
        </div>
      </div>
    </div>
  );
}

export default TextBody;