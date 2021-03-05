import { Box, Flex, Spacer } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout(props) {
  // console.log(props.children)
  return (
    <Flex flexDir="column" h="100vh">
      <Nav />

      <Box
        pl={["5%", "20%", "25%", "30%"]}
        pr={["5%", "20%", "25%", "30%"]}
        w="100%"
        as="main"
        mb={5}
        // mt={5}
      >
        {props.children}
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  );
}
