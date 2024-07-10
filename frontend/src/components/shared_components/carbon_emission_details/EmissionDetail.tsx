import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import React from "react";
import {FcElectricity} from "react-icons/fc";

const serverData = {
  title: "Impact of digital emissions",
  description: "The Internet devours a staggering 307 gigawatts of electricity every year. Responsible for 3.7% of global carbon emissions, the emissions caused by the Internet are comparable those of the aviation industry.",
  ending: "International Energy Agency, 2019"
}

const electricityData = {
  title: "Impact of household electricity emissions",
  description: "Household electricity consumption has a significant environmental footprint, devouring approximately 307 gigawatts of electricity annually. Accounting for about 3.7% of global carbon emissions, the emissions from household electricity usage rival those of the aviation industry.",
  ending: "International Energy Agency, 2019"
};

const vehicleData = {
  title: "Impact of vehicle emissions:",
  description: "Vehicles contribute significantly to environmental degradation, emitting approximately 9.3 gigatons of carbon dioxide annually. This accounts for nearly 17% of global carbon emissions, placing the transportation sector among the leading contributors to climate change.",
  ending: "International Energy Agency, 2019"
}

const hotelData = {
  title: "Impact of emissions from hotels during guests' stays:",
  description: "Emissions from hotels during guests' stays make a notable environmental impact, contributing approximately 1.8 giga tons of carbon dioxide emissions annually. This constitutes roughly 3.4% of global carbon emissions, emphasizing the significance of hotel operations in the broader context of climate change.",
  ending: "International Energy Agency, 2019"
}

const flightData = {
  title: "Impact of flight emissions",
  description: "The aviation industry contributes significantly to carbon emissions, consuming vast amounts of fuel and emitting pollutants into the atmosphere. Every year, flights collectively consume a substantial 307 gigawatts of energy, comparable to the energy consumption of the entire Internet. This results in approximately 3.7% of global carbon emissions, highlighting the aviation sector's significant environmental impact.",
  ending: "International Energy Agency, 2019"
};


const Emissions = ({params}: { params: { slug: string } }) => {

  let data: { title: string; description: string; ending: string } = {
    title: "Default Title",
    description: "Default Description",
    ending: "Default Ending"
  };

  switch (params.slug) {
    case "server_carbon_footprint":
      data = serverData;
      break;
    case "flight-emissions-calculator":
      data = flightData;
      break;
    case "hotel-carbon-impact-calculator":
      data = hotelData;
      break;
    case "electricity-carbon-usage-estimator":
      data = electricityData;
      break;
    case "vehicle-emissions-by-model":
      data = vehicleData;
      break;
  }

  return (
    <InfoWrapper
      icon={<FcElectricity/>}
      title={`${data.title}`}
      gradient="from-background to-renaissance text-glitter-shower"
    >
      <p className="text-lg">
        {data.description}
      </p>
      <br/>
      <div>{data.ending}</div>
    </InfoWrapper>
  );
};

export default Emissions;