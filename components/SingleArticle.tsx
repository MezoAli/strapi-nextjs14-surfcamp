import Image from "next/image";
import Test from "../public/lesson.png";
import Link from "next/link";

export type ArticleType = {
  id?: string | number;
  headline: string;
  slug: string;
  excerpt: string;
  author: string;
  featuredImage: any;
  isHighlitedArticle: boolean;
};
const SingleArticle = ({ article }: { article: ArticleType }) => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="flex flex-col">
        <Image
          src={`${process.env.BASE_URL}${article.featuredImage}`}
          alt="test-image"
          className="rounded-lg"
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-4 bg-lightBrown p-4 rounded-lg">
          <p className="text-lg font-semibold">{article.headline}</p>
          <time>Monday, June 05, 2023</time>
        </div>
      </div>
    </Link>
  );
};

export default SingleArticle;
