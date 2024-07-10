import React from "react";
import { Spotlight } from "../ui/Spotlight";
import TrySection from "@/components/home_page/TrySection";
import TextBody from "@/components/home_page/TextBody";

export function SpotlightPreview() {
  return (
    <div className="md:h-[46rem] h-[35rem] w-full rounded-md flex flex-col items-center justify-between bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:top-0"
        fill="white"
      />

      <TextBody/>
      <TrySection/>
    </div>
  );
}
