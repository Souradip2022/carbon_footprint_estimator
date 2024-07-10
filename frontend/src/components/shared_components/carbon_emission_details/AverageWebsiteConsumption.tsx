import Card from "@/components/shared_components/sub_components/Card";
import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import React from "react";
import { CgCoffee } from "react-icons/cg";
import { FcGlobe } from "react-icons/fc";
import { IoMdCar, IoMdRocket } from "react-icons/io";
import { GiElectric, GiSteeringWheel } from "react-icons/gi";
import { BsLightningFill } from "react-icons/bs";
import { FaBed, FaHotel } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { BiSolidPlane } from "react-icons/bi";

const averageWebsiteInfo = [
  {
    stat: "60kg CO2",
    description: "Every year, the average website emits",
    icon: (
      <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
        <IoMdRocket />
      </i>
    ),
  },
  {
    stat: "2,857 cups of coffee ",
    description: "Equivalent to",
    icon: (
      <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
        <CgCoffee />
      </i>
    ),
  },
];

const averageVehicleInfo = [
  {
    stat: "4.6 metric tons of CO2",
    description: "Every year, the average vehicle emits",
    icon: (
      <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
        <IoMdCar />
      </i>
    ),
  },
  {
    stat: "218,181 kilometers driven",
    description: "Equivalent to",
    icon: (
      <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
        <GiSteeringWheel />
      </i>
    ),
  },
];

const averageElectricityInfo = [
  {
    stat: "10,649 kWh of electricity",
    description: "Every year, the average household consumes",
    icon: (
      <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
        <BsLightningFill />
      </i>
    ),
  },
  {
    stat: "5.1 metric tons of CO2",
    description: "Equivalent to",
    icon: (
      <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
        <GiElectric />
      </i>
    ),
  },
];

const averageHotelInfo = [
  {
    stat: "10 hotel stays per year",
    description: "On average, an individual stays in a hotel",
    icon: (
      <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
        <FaHotel />
      </i>
    ),
  },
  {
    stat: "30 nights in total",
    description: "Equivalent to",
    icon: (
      <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
        <FaBed />
      </i>
    ),
  },
];

const averageFlightInfo = [
  {
    stat: "2.3 metric tons of CO2",
    description: "Every year, the average flight emits",
    icon: (
      <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
        <IoMdRocket />
      </i>
    ),
  },
  {
    stat: "9,227 kilometers flown",
    description: "Equivalent to",
    icon: (
      <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
        <BiSolidPlane />
      </i>
    ),
  },
];
interface Data {
  stat: string;
  description: string;
  icon: React.JSX.Element;
}

const AverageWebsiteConsumption = ({
  params,
}: {
  params: { slug: string };
}) => {
  let data: Array<Data> = [
    {
      stat: "not found",
      description: "Choose a correct model",
      icon: (
        <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
          <MdError color={"red"} />
        </i>
      ),
    },
    {
      stat: "not found",
      description: "Choose a correct model",
      icon: (
        <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
          <MdError color={"red"} />
        </i>
      ),
    },
  ];

  if (params.slug === "flight-emissions-calculator") {
    data = averageFlightInfo;
  } else if (params.slug === "server_carbon_footprint") {
    data = averageWebsiteInfo;
  } else if (params.slug === "vehicle-emissions-by-model") {
    data = averageVehicleInfo;
  }
  if (params.slug === "electricity-carbon-usage-estimator") {
    data = averageElectricityInfo;
  }
  if (params.slug === "hotel-carbon-impact-calculator") {
    data = averageHotelInfo;
  }
  if (params.slug === "flight-emissions-calculator") {
    data = averageFlightInfo;
  }

  return (
    <InfoWrapper icon={<FcGlobe />} title="Average Website" gradient="">
      <small className="font-light text-sm md:text-base pt-2 block">
        With 10,000 views a month
      </small>
      <div className=" flex flex-col items-center justify-center py-4">
        {data.map((card, i) => (
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
  );
};

export default AverageWebsiteConsumption;
