import Image from "next/image";
import Logo from "../public/Group 3.svg";
import FooterLinks from "./FooterLinks";
import FooterPolicyLinks from "./FooterPolicyLinks";
const Footer = () => {
  return (
    <footer className="bg-black py-8 px-10 text-white flex flex-col gap-8 mt-16">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="logo"
          className="w-[80px] h-[123px] custom_logo_white"
        />
        <FooterLinks />
      </div>
      <div className="flex justify-between items-center">
        <FooterPolicyLinks />
        <p>© Moutaz Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
