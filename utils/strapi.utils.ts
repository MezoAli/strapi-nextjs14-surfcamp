import { InfoBlockProps } from "@/components/InfoBlock";
import { ArticleType } from "@/components/SingleArticle";

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

export const transformBlogData = (dataArray: any) => {
  const articleData: ArticleType[] = dataArray.map((item: any) => {
    return {
      id: item.id,
      headline: item.attributes.headline,
      headlineColor: item.attributes.headlineColor,
      author: item.attributes.author,
      slug: item.attributes.slug,
      publishedAt: item.attributes.publishedAt,
      excerpt: item.attributes.excerpt,
      isHighlitedArticle: item.attributes.isHighlitedArticle,
      featuredImage: `${process.env.BASE_URL}${item.attributes.featuredImage.data[0].attributes.url}`,
    };
  });

  return articleData;
};
