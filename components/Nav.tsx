import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

const links = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Blog",
    link: "/posts",
  },
];

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        aria-label="toggle theme"
        m={4}
        onClick={toggleColorMode}
      />
      <Spacer />
      {links.map((link, index) => (
        <NextChakraLink key={index} href={link.link} p={4}>
          {link.name}
        </NextChakraLink>
      ))}
    </Flex>
  );
}
