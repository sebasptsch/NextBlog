import { Container, Flex } from "@chakra-ui/react";
import { SocialProfileJsonLd } from "next-seo";
import Nav from "./Nav";
export default function Layout(props) {
  return (
    <Flex flexDir="column" h="100vh">
      <SocialProfileJsonLd
        type="Person"
        name="Sebastian Pietschner"
        url="https://sebasptsch.dev"
        sameAs={["https://twitter.com/sebasptsch"]}
      />
      <Nav />

      <Container maxW="container.md" as="main">
        {props.children}
      </Container>
    </Flex>
  );
}
