import Image from "next/image";

type ArticleIntroProps = {
  imageSrc: any;
  heading: string;
  publishedAt: string;
  author: string;
  headlineColor?: string;
};

const ArticleIntro = ({
  heading,
  imageSrc,
  publishedAt,
  author,
  headlineColor = "black",
}: ArticleIntroProps) => {
  return (
    <section className="relative w-full py-[18rem] pr-[4.8]">
      <div className="top-0 left-0 absolute w-full h-full -z-[1]">
        <Image
          src={imageSrc}
          alt="hero-image"
          width={600}
          height={600}
          className="w-full max-h-screen custom_border_radius-bottom"
        />
      </div>

      <h2
        className={`ml-[3rem] max-h-[240px] text-${headlineColor} text-4xl md:text-7xl mb-[5rem] max-w-md`}
      >
        {heading.substring(0, 40)}
      </h2>
      <time className="ml-[3rem] font-semibold text-lg">
        {new Date(publishedAt).toLocaleDateString()} -{" "}
        {new Date(publishedAt).toLocaleTimeString()}
      </time>
      <p className="ml-[3rem] font-bold">{author}</p>
    </section>
  );
};

export default ArticleIntro;
