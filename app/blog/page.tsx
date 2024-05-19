import FeaturedAricles from "@/components/FeaturedAricles";
import HighlightArticle from "@/components/HighlightArticle";
import { ArticleType } from "@/components/SingleArticle";
import SubscripeCard from "@/components/SubscripeCard";
import { transformBlogData } from "@/utils/strapi.utils";
import axios from "axios";

const Blog = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/blog-articles?populate=deep"
  );

  const blogData = transformBlogData(response.data.data);
  const highlightedArticle = blogData.find(
    (blog: ArticleType) => blog.isHighlitedArticle === true
  );

  const articles = blogData.filter(
    (blog: ArticleType) => blog.isHighlitedArticle === false
  );

  return (
    <div className="pt-[9rem]">
      <HighlightArticle article={highlightedArticle as ArticleType} />
      <SubscripeCard />
      <FeaturedAricles articles={articles} />
    </div>
  );
};

export default Blog;
