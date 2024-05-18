import InfoWrapper from "@/components/server_footprint_checker/sub_components/InfoWrapper";
import React from "react";
import {AiFillQuestionCircle} from "react-icons/ai";

const ApiLimitations = () => {
  return (
    <div className="border-2 border-primary rounded-2xl">
      <InfoWrapper
        icon={<AiFillQuestionCircle/>}
        title="Limitations"
        gradient="from-background to-renaissance text-kittens-eye"
      >
        <div className="">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The potential margin of error widens the broader your system
              boundaries get.
            </li>
            <li>
              We only test the homepage, to test all the pages in your website we
              would have to add a script.
            </li>
            <li>
              In our calculations, we assume that all users are new visitors to
              your page.
            </li>
          </ul>
        </div>
      </InfoWrapper>
    </div>
  );
};

export default ApiLimitations;