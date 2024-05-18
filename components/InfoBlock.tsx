import Image from "next/image";

export type InfoBlockProps = {
  id?: string | number;
  imageSrc: any;
  headline: string;
  description: string;
  btnBackground?: "turquoise" | "orange" | "beige";
  reversed?: boolean;
  btnText?: string;
  showBtn?: boolean;
};

const InfoBlock = ({
  btnBackground = "beige",
  btnText = "BOOK NOW",
  description,
  headline,
  imageSrc,
  reversed = false,
  showBtn = false,
}: InfoBlockProps) => {
  const baseUrl = process.env.BASE_URL as any;
  return (
    <div className={`flex my-6 ${reversed ? "flex-row-reverse" : ""} gap-10`}>
      <div className="w-[50%]">
        <Image
          src={`${baseUrl}${imageSrc}`}
          alt="logo"
          width={600}
          height={600}
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
        {showBtn ? (
          <button
            className={`px-6 py-3 ${
              btnBackground === "turquoise" ? "btn_turquoise" : undefined
            } ${btnBackground === "beige" ? "btn_beige" : undefined} ${
              btnBackground === "orange" ? "btn_orange" : undefined
            } text-white font-bold rounded-3xl w-fit`}
          >
            {btnText}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
