"use client";
import Image from "next/image";
import LogoImage from "../public/Group 3.svg";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  return (
    <Image
      src={LogoImage}
      alt="logo"
      className={`w-[50px] h-[77px] ml-10 ${
        pathname === "/experience" ? "custom_logo_white" : undefined
      }`}
    />
  );
};

export default Logo;
