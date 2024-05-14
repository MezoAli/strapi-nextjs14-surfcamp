"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    label: "the camp",
    href: "/",
  },
  {
    label: "the experience",
    href: "/experience",
  },
  {
    label: "the blog",
    href: "/blog",
  },
];
const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-4">
      {LINKS.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-xl capitalize hover:underline underline-offset-3 font-semibold ${
              pathname === link.href ? "underline" : undefined
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
