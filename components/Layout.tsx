import { Box, Flex } from "@chakra-ui/react";
import Nav from "./Nav";
export default function Layout(props) {
  return (
    <Flex flexDir="column" h="100vh">
      <Nav />

      <Box
        pl={["5%", "20%", "25%", "30%"]}
        pr={["5%", "20%", "25%", "30%"]}
        w="100%"
        as="main"
        mb={5}
      >
        {props.children}
      </Box>
    </Flex>
  );
}
