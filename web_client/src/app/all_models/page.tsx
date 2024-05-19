import React from 'react';
import {NightLamp} from "@/components/available_models/NightLamp";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary-foreground gap-y-10">
      <NightLamp/>
    </main>
  );
}

export default Page;