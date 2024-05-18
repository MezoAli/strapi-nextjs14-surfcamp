import InfoBlock, { InfoBlockProps } from "@/components/InfoBlock";
import HeroSection from "../components/HeroSection";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    "http://localhost:1337/api/infoblocks-landing?populate=deep"
  );

  const dataArray = response.data.data.attributes.info_blocks.data;

  const infoBlocksData: InfoBlockProps[] = dataArray.map((item: any) => {
    return {
      id: item.id,
      headline: item.attributes.headline,
      description: item.attributes.description
        .map((paragraph: { children: any[] }) =>
          paragraph.children.map((child) => child.text).join("")
        )
        .filter((text: string) => text.trim() !== "")
        .join(""),
      reversed: item.attributes.reversed,
      imageSrc: item.attributes.imageSrc.data.attributes.url,
      showBtn: item.attributes.showBtn,
      btnText: item.attributes?.button.btnText,
      btnBackground: item.attributes?.button?.btnBackground,
    };
  });

  console.log(infoBlocksData);

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
    </main>
  );
}
