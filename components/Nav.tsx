import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Input,
    Spacer,
    useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
        <Box>
            <Flex>
                <Spacer />
                <IconButton aria-label="main menu" icon={<HamburgerIcon />} ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    Open
                </IconButton>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder="Type here..." />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue">Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
}
