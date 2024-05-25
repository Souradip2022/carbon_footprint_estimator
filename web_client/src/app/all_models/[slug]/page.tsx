import React from 'react';
import HeroElement from "@/components/shared_components/HeroElement";
import AverageWebsiteConsumption
  from "@/components/shared_components/carbon_emission_details/AverageWebsiteConsumption";
import DigitalEmissionDetail from "@/components/shared_components/carbon_emission_details/EmissionDetail";
import FootprintCalculationDetail
  from "@/components/shared_components/carbon_emission_details/FootprintCalculationDetail";
import {StepGuidance} from "@/components/shared_components/recomendation_to_users/StepGuidance";
import WhyCare from "@/components/shared_components/recomendation_to_users/WhyCare";
import ApiLimitations from "@/components/shared_components/recomendation_to_users/ApiLimitations";
import modelData from "@/data/modelData.json"
import InputUrl from "@/components/server_footprint_checker/calculate_section/InputUrl";


function Page({params}: { params: { slug: string } }) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-foreground gap-y-10">
        <HeroElement/>
        <h1>We are on {params.slug}</h1>
        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5  md:space-y-0 md:max-w-none items-stretch">
          <AverageWebsiteConsumption params={params}/>
          <DigitalEmissionDetail params={params}/>
          <FootprintCalculationDetail params={params}/>
        </div>

        {params.slug === `server_carbon_footprint` ? <div className="h-fit w-[90%]">
            <InputUrl/>
          </div> :
          <div>Not found</div>
        }

        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[360px] md:space-y-0 md:max-w-none items-stretch">
          <StepGuidance params={params}/>
          <WhyCare params={params}/>
          <ApiLimitations params={params}/>
        </div>
      </main>
    </>
  );
}

export default Page;