import Image from "next/image";
import Logo from "../public/Group 3.svg";
import NavLinks from "./NavLinks";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex top-0 left-0 justify-between items-center py-6 w-full absolute z-10">
      <Image src={Logo} alt="logo" className="w-[50px] h-[77px] ml-10" />
      <NavLinks />
      <div className="mr-10">
        <Link
          href="/events"
          className="px-5 py-3 bg-black text-white font-bold rounded-3xl hover:bg-black/65 transition duration-100"
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Header;
