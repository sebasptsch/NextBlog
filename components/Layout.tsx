import { Box, Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
  // console.log(props.children)
  return (
    <>
      <Nav />
      <main>
        <Box pl={[5, 10, 20, 60]} pr={[5, 10, 20, 60]}>
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
}
