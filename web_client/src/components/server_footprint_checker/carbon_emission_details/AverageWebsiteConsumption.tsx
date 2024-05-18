import Card from "@/components/server_footprint_checker/sub_components/Card";
import InfoWrapper from "@/components/server_footprint_checker/sub_components/InfoWrapper";
import React from "react";
import {CgCoffee} from "react-icons/cg";
import {FcGlobe} from "react-icons/fc";
import {IoMdRocket} from "react-icons/io";

const AverageWebsiteConsumption = () => {
  const averageInfo = [
    {
      stat: "60kg CO2",
      description: "Every year, the average website emits",
      icon: (
        <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
          <IoMdRocket/>
        </i>
      ),
    },
    {
      stat: "2,857 cups of coffee ",
      description: "Equivalent to",
      icon: (
        <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
          <CgCoffee/>
        </i>
      ),
    },
  ];

  return (
    <div className="border-2 border-primary rounded-2xl  w-[370px]  h-[430px]">
      <InfoWrapper
        icon={<FcGlobe/>}
        title="Average Website"
        gradient=""
      >
        <small className="font-light text-sm md:text-base pt-2 block">
          With 10,000 views a month
        </small>
        <div className=" flex flex-col items-center justify-center py-4">
          {averageInfo.map((card, i) => (
            <Card
              icon={card.icon}
              description={card.description}
              stat={card.stat}
              key={i}
              loadingData={false}
            />
          ))}
        </div>
        <small className="text-xs md:text-base text-gray-400">
          As per Website Carbon Calculator
        </small>
      </InfoWrapper>
    </div>
  );
};

export default AverageWebsiteConsumption;