import Image from "next/image";
import ExperienceImage from "../public/experience.png";

type InfoBlockProps = {
  imageSrc: any;
  headline: string;
  description: string;
  btnBackground: string;
  reversed: boolean;
  btnText: string;
};

const InfoBlock = ({
  btnBackground = "beige",
  btnText,
  description,
  headline,
  imageSrc,
  reversed = false,
}: InfoBlockProps) => {
  return (
    <div className={`flex my-6 ${reversed ? "flex-row-reverse" : ""} gap-10`}>
      <div className="w-[50%]">
        <Image
          src={imageSrc || ExperienceImage}
          alt="logo"
          className={`w-[680px] h-[680px] ${
            reversed
              ? "custom_border_radius-left"
              : "custom_border_radius-right"
          }`}
        />
      </div>
      <div className="flex w-[50%] flex-col gap-10 justify-start items-start mt-12 px-8">
        <h2 className="text-4xl font-bold capitalize">
          {headline || "the experience."}
        </h2>
        <p className="text-lg leading-loose">{description || "lorem20"}</p>
        <button
          className={`px-6 py-3 bg-${btnBackground} text-white font-bold rounded-3xl w-fit`}
        >
          {btnText || "BOOK NOW"}
        </button>
      </div>
    </div>
  );
};

export default InfoBlock;
