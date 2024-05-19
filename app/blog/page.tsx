import FeaturedAricles from "@/components/FeaturedAricles";
import HighlightArticle from "@/components/HighlightArticle";
import SubscripeCard from "@/components/SubscripeCard";

const Blog = () => {
  return (
    <div className="pt-[9rem]">
      <HighlightArticle />
      <SubscripeCard />
      <FeaturedAricles />
    </div>
  );
};

export default Blog;
