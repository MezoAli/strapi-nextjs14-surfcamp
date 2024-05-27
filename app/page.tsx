import InfoBlock from "@/components/InfoBlock";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { transformBlogData, transformData } from "@/utils/strapi.utils";
import HomeBlogSection from "@/components/HomeBlogSection";

export const revalidate = 300;

export default async function Home() {
  const response = await axios.get(
    "http://localhost:1337/api/infoblocks-landing?populate=deep"
  );

  const infoBlocks = response.data.data.attributes.info_blocks.data;

  const infoBlocksData = transformData(infoBlocks);

  const blogResponse = await axios.get(
    "http://localhost:1337/api/blog-articles?populate=deep"
  );

  const blogData = transformBlogData(blogResponse.data.data);

  return (
    <main>
      <HeroSection heading="" imageSrc="" btnColor="turquoise" />
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
      <HomeBlogSection blogData={blogData} />
    </main>
  );
}
