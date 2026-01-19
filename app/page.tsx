import Hero from "@/components/Home/HomeHero";
import Info from "@/components/Home/Info";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Services />
      <div className="h-40" />
    </div>
  );
}
