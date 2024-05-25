import BlogArticleHeadline from "./BlogArticleHeadline";
import BlogArticleParagraphWithImage from "./BlogArticleParagraphWithImage";

const ArticleContents = ({ atricleData }: any) => {
  const contents = atricleData.articleContent;
  console.log(contents);
  return (
    <div className="px-8 mt-[110px]">
      {contents.map((content: any) => {
        if (content.__component === "blog-article.headline") {
          return (
            <div key={content.id}>
              <BlogArticleHeadline content={content} />
            </div>
          );
        }
        if (content.__component === "blog-article.paragraph-with-image") {
          return (
            <div key={content.id}>
              <BlogArticleParagraphWithImage content={content} />
            </div>
          );
        }
        if (content.__component === "blog-article.paragraph") {
          return <div key={content.id}>{content.paragraph}</div>;
        }
        if (content.__component === "blog-article.landscape-image") {
          return <div key={content.id}>{content.imageCaption}</div>;
        }
      })}
    </div>
  );
};

export default ArticleContents;
