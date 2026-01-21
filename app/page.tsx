import CompanyStats from "@/components/Home/CompanyStats";
import DetailedServices from "@/components/Home/DetailedServices";
import Hero from "@/components/Home/HomeHero";
import Info from "@/components/Home/Info";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Services />
      <DetailedServices />
      <WhyChooseUs />
      <CompanyStats />
      <div className="h-40" />
    </div>
  );
}
