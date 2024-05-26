import Image from "next/image";
import Link from "next/link";

export type ArticleType = {
  id?: string | number;
  headline: string;
  slug: string;
  excerpt: string;
  author: string;
  featuredImage: any;
  isHighlitedArticle: boolean;
  publishedAt: string;
  headlineColor?: string;
};
const SingleArticle = ({ article }: { article: ArticleType }) => {
  console.log(article);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="flex flex-col h-full flex-grow"
    >
      <div className="flex flex-col h-full">
        <Image
          src={article.featuredImage}
          alt="test-image"
          className="rounded-lg h-full"
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-4 bg-lightBrown p-4 rounded-lg">
          <p className="text-lg font-semibold">{article.headline}</p>
          <time>
            {new Date(article.publishedAt).toLocaleDateString()} -{" "}
            {new Date(article.publishedAt).toLocaleTimeString()}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default SingleArticle;
