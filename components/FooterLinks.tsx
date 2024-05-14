import Link from "next/link";

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
  {
    label: "the events",
    href: "/blog",
  },
];

const FooterLinks = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      {LINKS.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-xl capitalize hover:underline underline-offset-3 font-semibold
        `}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
