import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import Image from "next/image";
import React from "react";
import {FcElectricity} from "react-icons/fc";

const Emissions = ({params}: {params : {slug: string}}) => {
  return (
    <InfoWrapper
      icon={<FcElectricity/>}
      title="Impact of digital emissions"
      gradient="from-background to-renaissance text-glitter-shower"
    >
      <p className="text-lg">
        The Internet devours a staggering 307 gigawatts of electricity every
        year. Responsible for 3.7% of global carbon emissions, the emissions
        caused by the Internet are comparable those of the aviation industry.
      </p>
      <br/>
      <div>International Energy Agency, 2019</div>
    </InfoWrapper>
  );
};

export default Emissions;