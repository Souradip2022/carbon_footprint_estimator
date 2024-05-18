import React from 'react';
import HeroElement from "@/components/server_footprint_checker/HeroElement";
import AverageWebsiteConsumption from "@/components/server_footprint_checker/carbon_emission_details/AverageWebsiteConsumption";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary ">
      <HeroElement/>
      <AverageWebsiteConsumption/>
    </main>
  );
}

export default Page;