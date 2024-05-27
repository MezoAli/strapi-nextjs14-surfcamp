import HomeBlogArticle from "./HomeBlogArticle";
import { ArticleType } from "./SingleArticle";

const HomeBlogSection = ({ blogData }: { blogData: ArticleType[] }) => {
  const firstRowData = blogData.slice(0, 2);
  const secondRowData = blogData.slice(
    blogData.length - 3,
    blogData.length - 1
  );

  return (
    <div className="my-10 mx-10">
      <h3 className="text-center text-6xl font-bold mb-12">the blog.</h3>
      <div className="grid grid-cols-3 gap-20 mb-12">
        {firstRowData.map((blog, index) => {
          return <HomeBlogArticle blog={blog} key={blog.id} index={index} />;
        })}
      </div>
      <div className="grid grid-cols-2 gap-20">
        {secondRowData.map((blog) => {
          return <HomeBlogArticle blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

export default HomeBlogSection;
