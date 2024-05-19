import React from 'react';
import Link from "next/link";

function TrySection() {
  return (
    <div className="top-9 w-full h-56 bg-gray-950 flex flex-col">
      <div
        className=" w-full h-full backdrop-brightness-150  flex  flex-col gap-6 justify-center items-center">
        <p className="md:w-[550px] px-8 text-center font-sans tracking-wide text-muted-foreground text-lg ">Here you can
          find
          innovative and environmentally-responsive concepts in its endeavor to create sustainable solutions in carbon
          emission reduction</p>

        <div className={"flex items-center justify-center"}>
          <Link href={"all_models/server_carbon_footprint"}>
            <button
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full  text-xs font-semibold leading-6  text-white inline-block p-px ">

        <span className="absolute inset-0 overflow-hidden rounded-full p-2">
          <span
            className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 "></span>
        </span>
              <div
                className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 w-full text-[16px]">
                <span>{`Try Now`}</span>
              </div>
              <span
                className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrySection;