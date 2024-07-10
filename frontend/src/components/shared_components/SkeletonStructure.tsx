import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

function SkeletonStructure() {
  return (
    <div className="w-full h-full  flex justify-evenly items-start text-left gap-y-3 relative top-6 -left-10">
      <Skeleton className="h-12 w-12 rounded-full flex items-center justify-center"/>
      <div className="space-y-2 ">
        <Skeleton className="h-5 w-[250px]"/>
        <Skeleton className="h-5 w-[200px]"/>
      </div>
    </div>
  );
}

export default SkeletonStructure;