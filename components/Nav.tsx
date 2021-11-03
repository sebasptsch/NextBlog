import logo from "@/public/logo.png";
import {
  Center,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [];

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex pl={["5%", "20%", "25%", "30%"]} pr={["5%", "20%", "25%", "30%"]}>
      <Center>
        <Image src={logo} height={"4em"} width={"4em"} layout="responsive" />
      </Center>
      <Spacer />
      <Center>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          aria-label="toggle theme"
          m={4}
          onClick={toggleColorMode}
        />
      </Center>
    </Flex>
  );
}
