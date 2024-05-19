import HeroSection from "@/components/HeroSection";
import ExperienceImage from "../../public/experience.png";
import InfoBlock from "@/components/InfoBlock";
import axios from "axios";
import { transformData } from "@/utils/strapi.utils";

export const revalidate = 300;

const Experience = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/infoblocks-experience?populate=deep"
  );

  const dataArray = response.data.data.attributes.info_blocks.data;

  const infoBlocksData = transformData(dataArray);

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
      {infoBlocksData.map((data) => {
        return (
          <InfoBlock
            key={data.id}
            description={data.description}
            headline={data.headline}
            imageSrc={data.imageSrc}
            btnBackground={data.btnBackground}
            btnText={data.btnText}
            reversed={data.reversed}
            showBtn={data.showBtn}
          />
        );
      })}
    </div>
  );
};

export default Experience;
