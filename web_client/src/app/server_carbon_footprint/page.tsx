import React from 'react';
import HeroElement from "@/components/server_footprint_checker/HeroElement";
import AverageWebsiteConsumption
  from "@/components/server_footprint_checker/carbon_emission_details/AverageWebsiteConsumption";
import DegitalEmissionDetail from "@/components/server_footprint_checker/carbon_emission_details/EmissionDetail";
import FootprintCalculationDetail
  from "@/components/server_footprint_checker/carbon_emission_details/FootprintCalculationDetail";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary ">
      <HeroElement/>
      <div className="flex w-full lg:flex-row flex-col px-8 lg:gap-x-3 gap-y-3.5 justify-center items-center">
        <AverageWebsiteConsumption/>
        <DegitalEmissionDetail/>
        <FootprintCalculationDetail/>
      </div>
    </main>
  );
}

export default Page;