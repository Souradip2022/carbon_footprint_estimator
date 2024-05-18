import Image from "next/image";
import NavBar from "@/components/NavBar";
import SpotlightPreview from "@/components/SpotlightPreview";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-popover">
      <SpotlightPreview/>
    </main>
  );
}
