import { Container, Flex } from "@chakra-ui/react";
import Nav from "./Nav";
export default function Layout(props) {
  return (
    <Flex flexDir="column" h="100vh">
      <Nav />

      <Container maxW="container.md" as="main">
        {props.children}
      </Container>
    </Flex>
  );
}
