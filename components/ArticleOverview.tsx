import Link from "next/link";

const ArticleOverview = ({ atricleData }: any) => {
  const headlines = atricleData.articleContent.filter(
    (item: any) => item.__component === "blog-article.headline"
  );

  return (
    <div className="px-8">
      <h2 className="text-5xl font-bold mb-6">in this blog</h2>
      <div className="flex justify-between gap-8 items-center">
        <p className="w-[70%] text-xl">{atricleData.excerpt}</p>
        <div className="w-[30%] mt-16">
          {headlines.map((headline: any, index: number) => {
            return (
              <Link
                key={headline.id}
                href={`#${headline.slug}`}
                className="block text-blue-500 underline text-xl"
              >
                {index + 1} - {headline.headline}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleOverview;
