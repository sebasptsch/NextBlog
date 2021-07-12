import {
  Center,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NextChakraLink } from "./NextChakra";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Stats",
    link: "/stats",
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
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        aria-label="toggle theme"
        m={4}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
