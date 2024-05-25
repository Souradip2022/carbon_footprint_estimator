import React from "react";
import {
  IoFootsteps,
  IoCalculator,
  IoGitNetworkSharp,
  IoHardwareChip,
} from "react-icons/io5";
import {VscDeviceMobile} from "react-icons/vsc";
import {MdOutlineCenterFocusStrong} from "react-icons/md";
import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";

import urlServerData from "@/components/server_footprint_checker/data/EmissionDetailServer.json";

const FootprintCalculationDetail = ({params}: { params: { slug: string } }) => {
  return (
    <InfoWrapper
      icon={<IoCalculator/>}
      title="Carbon footprint"
      gradient="from-background to-renaissance text-kittens-eye"
    >
      <ul
        className="md:grid md:grid-rows-2 md:grid-flow-col md:gap-2 md:items-baseline flex flex-col items-start justify-start space-y-2">
        <li className="text-gray-400">
          <i className="inline-block text-xl pr-2 align-bottom">
            <VscDeviceMobile/>
          </i>
          Device use
        </li>
        <li className="text-gray-400">
          <i className="inline-block text-xl pr-2 align-bottom">
            <IoGitNetworkSharp/>
          </i>
          Network use
        </li>
        <li className="text-gray-400">
          <i className="inline-block text-xl pr-2 align-bottom">
            <MdOutlineCenterFocusStrong/>
          </i>
          Data center use
        </li>
        <li className="text-gray-400">
          <i className="inline-block text-xl pr-2 align-bottom">
            <IoHardwareChip/>
          </i>
          Hardware production
        </li>
      </ul>
      <div className="">
        <h4 className="text-powder-white text-2xl md:text-2xl font-medium">
          System Segments
        </h4>
        <p className="block py-2">
          We have defined broad system boundaries for a comprehensive carbon
          footprint and segmented impact for more insight.
        </p>
      </div>
    </InfoWrapper>

  );
};

export default FootprintCalculationDetail;