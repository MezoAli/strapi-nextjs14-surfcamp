import Image from "next/image";

interface ImageData {
  [key: string]: any;
}

type BlogArticleLandscapeImageProps = {
  id: number;
  __component: string;
  imageCaption: string;
  imageSrc: {
    data: ImageData;
  };
};
const BlogArticleLandscapeImage = ({
  content,
}: {
  content: BlogArticleLandscapeImageProps;
}) => {
  return (
    <div className="my-8 max-w-4xl mx-auto flex flex-col gap-2">
      <Image
        className="w-full"
        alt={content.imageCaption}
        src={`${process.env.BASE_URL}${content.imageSrc.data.attributes.url}`}
        width={600}
        height={600}
      />
      {content.imageCaption && (
        <p className="text-sm text-slate-500">{content.imageCaption}</p>
      )}
    </div>
  );
};

export default BlogArticleLandscapeImage;
