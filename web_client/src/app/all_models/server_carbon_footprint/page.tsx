import React from 'react';
import HeroElement from "@/components/server_footprint_checker/HeroElement";
import AverageWebsiteConsumption
  from "@/components/server_footprint_checker/carbon_emission_details/AverageWebsiteConsumption";
import DigitalEmissionDetail from "@/components/server_footprint_checker/carbon_emission_details/EmissionDetail";
import FootprintCalculationDetail
  from "@/components/server_footprint_checker/carbon_emission_details/FootprintCalculationDetail";
import {StepGuidance} from "@/components/server_footprint_checker/recomendation_to_users/StepGuidance";
import WhyCare from "@/components/server_footprint_checker/recomendation_to_users/WhyCare";
import ApiLimitations from "@/components/server_footprint_checker/recomendation_to_users/ApiLimitations";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-foreground gap-y-10">
        <HeroElement/>
        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5  md:space-y-0 md:max-w-none items-stretch">
          <AverageWebsiteConsumption/>
          <DigitalEmissionDetail/>
          <FootprintCalculationDetail/>
        </div>

        <div className="h-fit w-[90%]">
          <div className="flex w-full items-center space-x-2 h-12">
            <Input
              type="email"
              className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
              placeholder="Enter URL of the webpage"
            />
            <Button type="submit" className="h-12">Calculate</Button>
          </div>
        </div>

        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[360px] md:space-y-0 md:max-w-none items-stretch">
          <StepGuidance/>
          <WhyCare/>
          <ApiLimitations/>
        </div>
      </main>
    </>
  );
}

export default Page;