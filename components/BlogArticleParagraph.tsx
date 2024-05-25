type BlogArticleParagraphProps = {
  id: number;
  __component: string;
  paragraph: string;
};

const BlogArticleParagraph = ({
  content,
}: {
  content: BlogArticleParagraphProps;
}) => {
  return (
    <div className="my-8 leading-8 font-semibold text-lg max-w-6xl mx-auto">
      {content.paragraph}
    </div>
  );
};

export default BlogArticleParagraph;
