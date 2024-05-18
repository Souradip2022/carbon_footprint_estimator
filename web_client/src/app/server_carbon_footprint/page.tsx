import React from 'react';
import HeroElement from "@/components/server_footprint_checker/HeroElement";
import AverageWebsiteConsumption
  from "@/components/server_footprint_checker/carbon_emission_details/AverageWebsiteConsumption";
import DegitalEmissionDetail from "@/components/server_footprint_checker/carbon_emission_details/EmissionDetail";
import FootprintCalculationDetail
  from "@/components/server_footprint_checker/carbon_emission_details/FootprintCalculationDetail";
import {StepGuidance} from "@/components/server_footprint_checker/recomendation_to_users/StepGuidance";

function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-secondary ">
        <HeroElement/>
        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[360px] md:space-y-0 md:max-w-none items-stretch">
          <AverageWebsiteConsumption/>
          <DegitalEmissionDetail/>
          <FootprintCalculationDetail/>
        </div>
      </main>
      <footer className="flex min-h-screen flex-col items-center justify-center bg-secondary ">
        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[360px] md:space-y-0 md:max-w-none items-stretch">
          <StepGuidance/>
        </div>
      </footer>
    </>
  );
}

export default Page;