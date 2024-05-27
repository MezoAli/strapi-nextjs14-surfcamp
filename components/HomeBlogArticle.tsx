import Link from "next/link";
import { ArticleType } from "./SingleArticle";
import Image from "next/image";

const HomeBlogArticle = ({
  blog,
  index,
}: {
  blog: ArticleType;
  index?: number;
}) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className={`flex flex-col h-full flex-grow ${
        index === 0 ? "col-span-2" : undefined
      }`}
    >
      <div className="flex flex-col h-full">
        <Image
          src={blog.featuredImage}
          alt="test-image"
          className="rounded-md h-[450px] w-full"
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <p className="text-lg font-semibold">{blog.headline}</p>
          <time>
            {new Date(blog.publishedAt).toLocaleDateString()} -{" "}
            {new Date(blog.publishedAt).toLocaleTimeString()}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default HomeBlogArticle;
