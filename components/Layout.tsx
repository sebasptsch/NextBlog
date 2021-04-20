import { NextSeo, SocialProfileJsonLd } from "next-seo";
import "tailwindcss/tailwind.css";
import Nav from "./Nav";
export default function Layout(props) {
  return (
    <div className="flex flex-col h-screen">
      <SocialProfileJsonLd
        type="Person"
        name="Sebastian Pietschner"
        url="https://sebasptsch.dev"
        sameAs={["https://twitter.com/sebasptsch"]}
      />
      <NextSeo
        defaultTitle="Seb's Blog"
        twitter={{
          handle: "@sebasptsch",
        }}
      />
      <Nav />

      <main className="container mx-auto">{props.children}</main>
    </div>
  );
}
