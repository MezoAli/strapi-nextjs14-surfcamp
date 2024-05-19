import SingleArticle, { ArticleType } from "./SingleArticle";

const FeaturedAricles = ({ articles }: { articles: ArticleType[] }) => {
  return (
    <div className="mx-6">
      <h2 className="text-4xl font-bold mb-6">Our featured articles</h2>
      <div className="grid grid-cols-3 gap-8">
        {articles.map((article) => {
          return <SingleArticle key={article.id} article={article} />;
        })}
      </div>
      <button className="px-10 block my-6 mx-auto py-4 text-white font-semibold rounded-3xl bg-turquoise capitalize">
        see more
      </button>
    </div>
  );
};

export default FeaturedAricles;
