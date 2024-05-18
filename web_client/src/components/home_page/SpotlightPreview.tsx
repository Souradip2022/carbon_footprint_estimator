import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import TextBody from "@/components/home_page/TextBody";

export function SpotlightPreview() {
  return (
    <div className="h-[46rem] w-full rounded-md flex  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:top-0"
        fill="white"
      />
      <TextBody/>
    </div>
  );
}
