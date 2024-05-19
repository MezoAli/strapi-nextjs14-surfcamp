import Image from "next/image";
import Test from "../public/lesson.png";

const SingleArticle = () => {
  return (
    <div className="flex flex-col">
      <Image src={Test} alt="test-image" className="rounded-lg" />
      <div className="flex flex-col gap-4 bg-lightBrown p-4 rounded-lg">
        <p className="text-lg font-semibold">
          surfboard shaping and design behind the scenes of crafting the perfect
          board
        </p>
        <time>Monday, June 05, 2023</time>
      </div>
    </div>
  );
};

export default SingleArticle;
