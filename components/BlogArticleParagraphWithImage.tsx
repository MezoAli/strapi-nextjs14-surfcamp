import Image from "next/image";

interface ImageData {
  [key: string]: any;
}

type BlogArticleParagraphWithImageProps = {
  id: number;
  __component: string;
  paragraph: string;
  imageCaption: string;
  isLandscape: boolean;
  reversed: boolean;
  imageSrc: {
    data: ImageData;
  };
};

const BlogArticleParagraphWithImage = ({
  content,
}: {
  content: BlogArticleParagraphWithImageProps;
}) => {
  return (
    <div
      className={`flex mb-12 py-8 justify-between items-center gap-8 ${
        content.reversed ? "flex-row-reverse" : undefined
      }`}
    >
      <div
        className={`${content.isLandscape ? "w-[40%]" : "w-[60%]"} leading-7`}
      >
        {content.paragraph}
      </div>
      <div
        className={`${
          content.isLandscape ? "w-[60%]" : "w-[40%]"
        } flex flex-col gap-2`}
      >
        <Image
          className="max-h-[600px] w-full"
          alt={content.imageCaption || "image-caption"}
          src={`${process.env.BASE_URL}${content.imageSrc.data.attributes.url}`}
          width={600}
          height={600}
        />
        {content.imageCaption && (
          <p className="text-sm text-slate-500">{content.imageCaption}</p>
        )}
      </div>
    </div>
  );
};

export default BlogArticleParagraphWithImage;
