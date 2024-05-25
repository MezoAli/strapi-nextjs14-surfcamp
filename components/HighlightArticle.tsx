import Image from "next/image";
import BlogImage from "../public/playground.png";
import Link from "next/link";
import { ArticleType } from "./SingleArticle";

const HighlightArticle = ({ article }: { article: ArticleType }) => {
  return (
    <article className="flex justify-center items-center gap-8 px-6 my-10">
      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="text-6xl font-bold">{article.headline}</h2>
        <p>{article.excerpt}</p>
        <button className="px-6 py-4 text-white font-semibold rounded-3xl bg-turquoise capitalize">
          <Link href={`/blog/${article.slug}`}>read more</Link>
        </button>
      </div>
      <Image
        src={article.featuredImage}
        alt="blog-image"
        className="w-[50%] rounded-2xl"
        width={600}
        height={600}
      />
    </article>
  );
};

export default HighlightArticle;
