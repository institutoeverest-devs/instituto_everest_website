import { HeroSection } from "@/components/sections/HeroSection";
import { AmbassadorsSection } from "@/components/sections/AmbassadorsSection";
import { RutaCrecimiento } from "@/components/sections/RutaCrecimiento";
import { NivelesSection } from "@/components/sections/NivelesSection";
import { PilaresSection } from "@/components/sections/PilaresSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <AmbassadorsSection />
      <RutaCrecimiento />
      <NivelesSection />
      <PilaresSection />
      <TestimonialsSection />
    </div>
  );
}
