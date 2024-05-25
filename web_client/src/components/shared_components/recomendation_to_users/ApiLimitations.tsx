import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import React from "react";
import {AiFillQuestionCircle} from "react-icons/ai";
import urlServerData from "@/components/server_footprint_checker/data/ApiLimitationsServer.json";

const ApiLimitations = ({params}: { params: { slug: string } }) => {

  let data: Array<string>;
  if (params.slug === "server_carbon_footprint") {
    data = urlServerData;
  } else {
    data = [];
  }

  return (
    <InfoWrapper
      icon={<AiFillQuestionCircle/>}
      title="Limitations"
      gradient="from-background to-renaissance text-kittens-eye"
    >
      <div className="">
        <ul className="list-disc space-y-2 pl-6">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </InfoWrapper>
  );
};

export default ApiLimitations;
