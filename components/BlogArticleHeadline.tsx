type BlogArticleHeadlineProps = {
  id: number;
  __component: string;
  headline: string;
  slug: string;
};

const BlogArticleHeadline = ({
  content,
}: {
  content: BlogArticleHeadlineProps;
}) => {
  return (
    <div id={content.slug}>
      <h3 className="text-5xl font-bold mb-6">{content.headline}</h3>
    </div>
  );
};

export default BlogArticleHeadline;
