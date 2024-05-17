import Image from "next/image";
import HeroImage from "../public/hero-image.png";
import Logo from "../public/Group 3.svg";

type HeroSectionProps = {
  imageSrc: any;
  heading: string;
  logoColorClass: string;
};

const HeroSection = ({
  heading,
  imageSrc,
  logoColorClass,
}: HeroSectionProps) => {
  return (
    <section className="relative w-full py-[18rem] pr-[4.8]">
      <div className="top-0 left-0 absolute w-full h-full -z-[1]">
        <Image
          src={imageSrc || HeroImage}
          alt="hero-image"
          className="w-full max-h-screen custom_border_radius-bottom"
        />
      </div>

      <h2 className="ml-[3rem] text-4xl md:text-7xl mb-[5rem] max-w-sm ">
        {heading || "barrel. your. happiness."}
      </h2>
      <button className="px-6 absolute ml-[3rem]  py-3 bg-turquoise text-white font-bold rounded-3xl">
        BOOK NOW
      </button>
      <Image
        src={Logo}
        alt="logo"
        className={`w-[80px] h-[123px] ${
          logoColorClass || ""
        } b-0 left-[50%] absolute translate-x-[-50%] translate-y-[100%]`}
      />
    </section>
  );
};

export default HeroSection;
