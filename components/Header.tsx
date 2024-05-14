import Image from "next/image";
import Logo from "../public/Group 3.svg";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex top-0 left-0 justify-between items-center py-6 w-full fixed z-10">
      <Image src={Logo} alt="logo" className="w-[50px] h-[77px] ml-10" />
      <div className="flex justify-center items-center gap-4">
        <Link
          href={"/"}
          className="text-xl capitalize hover:underline underline-offset-3 font-semibold"
        >
          the camp
        </Link>
        <Link
          className="text-xl capitalize hover:underline underline-offset-3 font-semibold"
          href={"/"}
        >
          the experience
        </Link>
        <Link
          className="text-xl capitalize hover:underline underline-offset-3 font-semibold"
          href={"/"}
        >
          the blog
        </Link>
      </div>
      <div className="mr-10">
        <button className="px-4 py-2 bg-black text-white font-bold rounded-3xl">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Header;
