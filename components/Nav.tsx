import logo from "@/public/logo.png";
import { Flex, IconButton, Spacer, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [];

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex pl={["5%", "20%", "25%", "30%"]} pr={["5%", "20%", "25%", "30%"]}>
      <Image src={logo} height={4} />
      <Text fontWeight="semibold">Sebastian's Blog</Text>
      <Spacer />
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        aria-label="toggle theme"
        m={4}
        onClick={toggleColorMode}
      />
      {/* <Auth /> */}
    </Flex>
  );
}
