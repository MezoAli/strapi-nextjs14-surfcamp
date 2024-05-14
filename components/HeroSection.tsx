import Image from "next/image";
import HeroImage from "../public/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image src={HeroImage} alt="hero-image" className="w-full max-h-screen" />
      <h2 className="text-7xl font-bold absolute top-[28%] leading-[80px] left-12 max-w-sm">
        barrel. your. happiness.
      </h2>
      <button className="px-4 absolute left-12 top-[65%] py-2 bg-turquoise text-white font-bold rounded-3xl">
        BOOK NOW
      </button>
    </section>
  );
};

export default HeroSection;
