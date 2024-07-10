import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const ApiLimitations = ({ params }: { params: { slug: string } }) => {
  let data = [
    "Economic Constraints: High initial costs of sustainable technologies and products may be prohibitive for some individuals or businesses.",
    "Infrastructure Limitations: Lack of infrastructure for renewable energy, public transportation, and sustainable practices may hinder widespread adoption."
  ];

  return (
    <InfoWrapper
      icon={<AiFillQuestionCircle/>}
      title="Limitations"
      gradient="from-background to-renaissance text-kittens-eye"
    >
      <div className="text-lg">
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
