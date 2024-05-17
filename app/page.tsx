import InfoBlock from "@/components/InfoBlock";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection heading="" imageSrc="" btnColor="turquoise" />
      <InfoBlock />
      <InfoBlock reversed headline="test" />
    </main>
  );
}
