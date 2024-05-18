import {SpotlightPreview}from "@/components/home_page/SpotlightPreview";
import AverageWebsiteConsumption from "@/components/server_footprint_checker/carbon_emission_details/AverageWebsiteConsumption";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-secondary">
      <SpotlightPreview/>
    </main>
  );
}
