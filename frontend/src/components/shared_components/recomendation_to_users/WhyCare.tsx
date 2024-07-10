import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import {BiRun} from "react-icons/bi";
import React from "react";

const vehicleData: Array<string> = [
  "Reducing carbon emissions helps mitigate climate change by minimizing the greenhouse gases that contribute to global warming, which in turn reduces the impacts of extreme weather events, sea level rise, and habitat loss.",
  "Lowering carbon emissions can improve air quality, reducing respiratory illnesses and other health problems associated with pollution. Additionally, sustainable practices like active transportation and a plant-based diet promote overall well-being.",
];

const electricityData = [
  "Reducing household electricity emissions is crucial for mitigating climate change. By minimizing the release of greenhouse gases into the atmosphere, we can help combat global warming and lessen the impacts of extreme weather events, rising sea levels, and habitat destruction.",
  "Lowering electricity emissions improves air quality, which has significant health benefits. By reducing pollution, we can decrease respiratory illnesses and other health problems associated with poor air quality. Encouraging sustainable practices such as energy conservation and utilizing renewable energy sources promotes both environmental and human well-being.",
];

const serverData = [
  "Reducing carbon emissions from web servers is crucial for mitigating climate change. By minimizing the release of greenhouse gases, we can help combat global warming and reduce the impacts of extreme weather events, sea level rise, and habitat loss.",
  "Lowering carbon emissions improves air quality and human health. By reducing pollution associated with web server operations, we can decrease respiratory illnesses and other health problems caused by poor air quality. Encouraging energy-efficient practices and utilizing renewable energy sources in server operations not only benefits the environment but also promotes overall well-being.",
];

const hotelData = [
  "Reducing carbon emissions from hotel stays is crucial for mitigating climate change. Each individual's stay contributes to the release of greenhouse gases, which in turn exacerbates global warming and its associated impacts such as extreme weather events, sea level rise, and habitat loss.",
  "Lowering carbon emissions from hotel stays improves air quality and human health. By reducing the environmental impact of hotel operations, we can decrease respiratory illnesses and other health problems caused by pollution. Encouraging sustainable practices during hotel stays, such as energy conservation and waste reduction, not only benefits the environment but also promotes overall well-being.",
];

const flightData = [
  "Reducing carbon emissions from flights is crucial for mitigating climate change. Each individual's flight contributes to the release of greenhouse gases, which exacerbates global warming and its associated impacts such as extreme weather events, sea level rise, and habitat loss.",
  "Lowering carbon emissions from flights improves air quality and human health. By reducing the environmental impact of air travel, we can decrease respiratory illnesses and other health problems caused by pollution. Encouraging sustainable practices during flights, such as carbon offsetting and fuel-efficient aircraft, not only benefits the environment but also promotes overall well-being.",
];


const WhyCare = ({params}: { params: { slug: string } }) => {


  let data: Array<string> = ["", ""];

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
      icon={<BiRun/>}
      title="Steps you can take"
      gradient="from-background to-renaissance text-glitter-shower"
    >
      <div className="text-gray-200 space-y-2 text-lg">
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </InfoWrapper>
  );
};

export default WhyCare;
