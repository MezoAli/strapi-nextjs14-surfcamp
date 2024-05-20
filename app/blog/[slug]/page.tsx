import React from "react";

const SingleBlogDetails = ({ params }: { params: { slug: string } }) => {
  return <div className="pt-[9rem]">slug : {params.slug}</div>;
};

export default SingleBlogDetails;
