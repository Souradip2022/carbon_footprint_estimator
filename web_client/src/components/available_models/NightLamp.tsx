"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "../ui/lamp";
import {BackgroundGradient} from "@/components/ui/background-gradient";
import modelData from "@/data/modelData.json"
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface ModelData {
  image: string;
  name: string;
  description: string;
  slug: string;
}

export function NightLamp() {

  const data: Array<ModelData> = modelData;

  function generateRandomKey(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  return (
    <LampContainer className="relative lg:h-[96rem] h-[80rem] w-full flex flex-col justify-center items-center
    ">
      <motion.h1
        initial={{opacity: 0.5, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 text-center text-4xl bg-clip-text font-medium tracking-tight text-transparent md:text-7xl w-full absolute lg:-top-[1000px] -top-[800px]">
        List of all our available Models
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 md:grid-cols-2 my-20 w-full absolute lg:-top-[850px] -top-[700px] px-6">
        {data.map(item =>
          <div
            className="flex items-center justify-center w-[100%] h-full"
            key={generateRandomKey()}>
            <BackgroundGradient
              className="flex w-full flex-col gap-5 rounded-[22px] relative bg-zinc-900  items-center justify-around lg:min-h-[535px] py-3 px-4 lg:max-w-[500px]
              max-w-[340px]">
              <Image
                src={item.image} alt={item.name} height="225"
                width="350" className="rounded-sm w-[350px] h-[225px]"/>

              <h1 className="text- text-center text-2xl font-semibold tracking-tight ">{item.name}</h1>

              <p className=" text-center text-lg">{item.description}</p>
              <Link href={`all_models/${item.slug}`}>
                <Button className="">{"Use Model"}</Button>
              </Link>
            </BackgroundGradient>
          </div>
        )}
      </div>

    </LampContainer>
  );
}
