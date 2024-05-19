import Image from "next/image";
import BlogImage from "../public/playground.png";

const HighlightArticle = () => {
  return (
    <div className="flex justify-center items-center gap-8 px-6 my-10">
      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="text-6xl font-bold">3 tips for a super fast takeoff</h2>
        <p>
          Improving your take-off phase in surfing is a fundamental step toward
          riding waves with more confidence and style. Improving your take-off
          phase is a gradual process, and it may take time to master. Be
          patient, stay committed to practice, and enjoy the journey of becoming
          a better surfer. With dedication and persistence, you'll see progress
          and have more enjoyable rides. Here is how:
        </p>
        <button className="px-6 py-4 text-white font-semibold rounded-3xl bg-turquoise capitalize">
          read more
        </button>
      </div>
      <Image src={BlogImage} alt="blog-image" className="w-[50%] rounded-lg" />
    </div>
  );
};

export default HighlightArticle;
