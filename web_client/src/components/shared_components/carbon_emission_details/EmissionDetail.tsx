import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import Image from "next/image";
import React from "react";
import {FcElectricity} from "react-icons/fc";

import urlServerData from "@/components/server_footprint_checker/data/EmissionDetailServer.json";

const Emissions = ({params}: {params : {slug: string}}) => {

  let data: { title: string; description: string; ending: string } = {
    title: "Default Title",
    description: "Default Description",
    ending: "Default Ending"
  };

  if (params.slug === "server_carbon_footprint") {
    data = urlServerData;
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