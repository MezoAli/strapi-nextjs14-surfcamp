import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex mb-[3.5rem] top-0 left-0 justify-between items-center py-6 w-full absolute z-10 px-8">
      <Logo />
      <NavLinks />
      <div className="mr-10">
        <Link
          href="/signup"
          className="px-5 py-3 bg-black text-white font-bold rounded-3xl hover:bg-black/65 transition duration-100"
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Header;
