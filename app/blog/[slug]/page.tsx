import ArticleContents from "@/components/ArticleContents";
import ArticleIntro from "@/components/ArticleIntro";
import ArticleOverview from "@/components/ArticleOverview";
import HeroSection from "@/components/HeroSection";
import { transformBlogData } from "@/utils/strapi.utils";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

const SingleBlogDetails = async ({ params }: { params: { slug: string } }) => {
  const response = await axios.get(
    "http://localhost:1337/api/blog-articles?populate=deep"
  );

  const blogsData = transformBlogData(response.data.data);

  const blogData = blogsData.find((item) => item.slug === params.slug);

  if (!blogData) {
    redirect("/");
  }

  const atricleData = response.data.data.find(
    (item: any) => item.attributes.slug === params.slug
  );

  return (
    <div>
      <ArticleIntro
        heading={blogData?.headline as string}
        imageSrc={blogData.featuredImage}
        author={blogData.author}
        publishedAt={blogData.publishedAt}
        headlineColor={blogData.headlineColor}
      />
      <ArticleOverview atricleData={atricleData.attributes} />
      <ArticleContents atricleData={atricleData.attributes} />
    </div>
  );
};

export default SingleBlogDetails;
