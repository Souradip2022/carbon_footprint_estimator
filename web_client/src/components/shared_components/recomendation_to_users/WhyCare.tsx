import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import {BiRun} from "react-icons/bi";
import React from "react";

import urlServerData from "@/components/server_footprint_checker/data/WhyCareServer.json"

const WhyCare = ({params}: { params: { slug: string } }) => {

  let data: Array<string>;
  if (params.slug === "server_carbon_footprint") {
    data = urlServerData;
  } else {
    data = [];
  }

  return (
    <InfoWrapper
      icon={<BiRun/>}
      title="Steps you can take"
      gradient="from-background to-renaissance text-glitter-shower"
    >
      <div className="text-gray-200 space-y-2">
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </InfoWrapper>
  );
};

export default WhyCare;