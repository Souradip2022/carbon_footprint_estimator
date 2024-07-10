"use server"
import React from "react";
import HeroElement from "@/components/shared_components/HeroElement";
import AverageWebsiteConsumption
  from "@/components/shared_components/carbon_emission_details/AverageWebsiteConsumption";
import DigitalEmissionDetail from "@/components/shared_components/carbon_emission_details/EmissionDetail";
import FootprintCalculationDetail
  from "@/components/shared_components/carbon_emission_details/FootprintCalculationDetail";
import {StepGuidance} from "@/components/shared_components/recomendation_to_users/StepGuidance";
import WhyCare from "@/components/shared_components/recomendation_to_users/WhyCare";
import ApiLimitations from "@/components/shared_components/recomendation_to_users/ApiLimitations";
import InputUrl from "@/components/server_footprint_checker/InputUrl";
import InputFlightData from "@/components/flight_emission_model/InputFlightData";
import InputHotelData from "@/components/hotel_emission_model/InputHotelData";
import InputElectricityData from "@/components/electricity_carbon_emission/InputElectricityData";
import VehicleInput from "@/components/vehicle_model/VehicleInput";

function Page({params}: { params: { slug: string } }) {
  console.log(params);

   /*async function apiFetch(urlVal: string): Promise<any> {

    console.log("Server fetch")
    const dataResponse = await fetch(`https://api.websitecarbon.com/site?url=${urlVal}`);
    const data = await dataResponse.json();
    console.log(data.statistics);
    if(!data?.statistics || !data){
      throw new Error("fgdfg")
    }
    return data;
  }

  if (params.slug === "server_carbon_footprint") {
    apiFetch("https://www.toutube.com/")
    .then((data) => {
      const response = data.statistics.co2;
      // console.log(response);
      const grid = (response.grid.grams / 1000) * 365;
      const ren = (response.renewable.grams / 1000) * 365;
      // console.log((grid + ren) * 100);
    })
      .catch((error: any)=> {
        console.log(error.message)
      });

  }*/

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-foreground gap-y-10">
        <HeroElement params={params}/>
        <h1>We are on {params.slug}</h1>
        <div
          className=" h-full w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5  md:space-y-0 md:max-w-none items-stretch">
          <AverageWebsiteConsumption params={params}/>
          <DigitalEmissionDetail params={params}/>
          <FootprintCalculationDetail params={params}/>
        </div>

        {params.slug === `server_carbon_footprint` && (
          <div className="h-fit w-[90%]">
            <InputUrl/>
          </div>
        )}

        {params.slug === "flight-emissions-calculator" && (
          <div className="h-fit w-[90%]">
            <InputFlightData/>
          </div>
        )}

        {params.slug === "hotel-carbon-impact-calculator" && (
          <div className="h-fit w-[90%]">
            <InputHotelData/>
          </div>
        )}

        {params.slug === "electricity-carbon-usage-estimator" && (
          <div className="h-fit w-[90%]">
            <InputElectricityData/>
          </div>
        )}

        {params.slug === "vehicle-emissions-by-model" && (
          <div className="h-fit w-[90%]">
            <VehicleInput/>
          </div>
        )}

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
