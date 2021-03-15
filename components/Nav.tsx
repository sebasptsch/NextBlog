import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakra";

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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex pl={["5%", "20%", "25%", "30%"]} pr={["5%", "20%", "25%", "30%"]}>
      <Center>
        {links.map((link, index) => (
          <NextChakraLink key={index} href={link.link} p={2}>
            {link.name}
          </NextChakraLink>
        ))}
      </Center>
      <Spacer />
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        aria-label="toggle theme"
        m={4}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
