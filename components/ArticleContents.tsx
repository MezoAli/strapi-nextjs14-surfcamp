import BlogArticleHeadline from "./BlogArticleHeadline";
import BlogArticleLandscapeImage from "./BlogArticleLandscapeImage";
import BlogArticleParagraph from "./BlogArticleParagraph";
import BlogArticleParagraphWithImage from "./BlogArticleParagraphWithImage";

const ArticleContents = ({ atricleData }: any) => {
  const contents = atricleData.articleContent;
  console.log(contents);
  return (
    <div className="px-8 mt-[110px]">
      {contents.map((content: any, index: number) => {
        if (content.__component === "blog-article.headline") {
          return (
            <div key={`${content.id}-${index}`}>
              <BlogArticleHeadline content={content} />
            </div>
          );
        }
        if (content.__component === "blog-article.paragraph-with-image") {
          return (
            <div key={`${content.id}-${index}`}>
              <BlogArticleParagraphWithImage content={content} />
            </div>
          );
        }
        if (content.__component === "blog-article.paragraph") {
          return (
            <div key={`${content.id}-${index}`}>
              <BlogArticleParagraph content={content} />
            </div>
          );
        }
        if (content.__component === "blog-article.landscape-image") {
          return (
            <div key={`${content.id}-${index}`}>
              <BlogArticleLandscapeImage content={content} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ArticleContents;
