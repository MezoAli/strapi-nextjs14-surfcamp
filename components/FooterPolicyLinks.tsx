import Link from "next/link";

const LINKS = [
  {
    label: "imprint",
    href: "/",
  },
  {
    label: "terms and conditions",
    href: "/experience",
  },
  {
    label: "data protection",
    href: "/blog",
  },
];

const FooterPolicyLinks = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      {LINKS.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-lg capitalize hover:underline underline-offset-3 font-semibold
        `}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterPolicyLinks;
