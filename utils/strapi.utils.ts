import { InfoBlockProps } from "@/components/InfoBlock";

export const transformData = (dataArray: any) => {
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
      btnText: item.attributes?.button?.btnText,
      btnBackground: item.attributes?.button?.btnBackground,
    };
  });

  return infoBlocksData;
};
