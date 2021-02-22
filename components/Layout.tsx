import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
  // console.log(props.children)
  return (
    <>
      <Nav />
      <main>
        <Box pl={["10%", "20%", "25%", "30%"]} pr={["10%", "20%", "25%", "30%"]} w="100%">
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
}
