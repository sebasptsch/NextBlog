import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/posts",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export default function Nav() {
  return (
    <div className="mx-auto flex flex-row">
      {links.map((link, index) => (
        <Link key={index} href={link.link}>
          <p className="p-2">{link.name}</p>
        </Link>
      ))}
    </div>
  );
}
