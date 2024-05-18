import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

export default function SpotlightPreview() {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] absolute overflow-hidden top-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />
    </div>
  );
}
