import HeroSection from "@/components/HeroSection";
import ExperienceImage from "../../public/experience.png";
import InfoBlock from "@/components/InfoBlock";
import Location from "../../public/location.png";
import Lodging from "../../public/loadging.png";
const Experience = () => {
  return (
    <div>
      <HeroSection
        heading="discover. your. spirit."
        imageSrc={ExperienceImage}
        logoColorClass="custom_logo_orange"
        headingColor="white"
        btnColor="orange"
        btnText="BOOK NOW "
      />
      <InfoBlock
        imageSrc={Location}
        headline="the location"
        description="test"
      />
      <InfoBlock
        imageSrc={Lodging}
        headline="the loadging"
        description="test"
        reversed
      />
    </div>
  );
};

export default Experience;
