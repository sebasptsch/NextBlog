// e.g. src/Chakra.js
// a) import `ChakraProvider` component as well as the storageManagers
import {
    ChakraProvider,
    cookieStorageManager,
    extendTheme,
    localStorageManager
} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: (props) => ({
            // code: {
            //   fontFamily: "Fira Code",
            // },
            p: {
                color: props.colorMode === "dark" ? "gray.300" : "gray.700",
            },
            li: {
                color: props.colorMode === "dark" ? "gray.300" : "gray.700",
            },
        }),
    },
});

export function Chakra({ cookies, children }) {
    // b) Pass `colorModeManager` prop
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager

    return (
        <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
            {children}
        </ChakraProvider>
    )
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
    return {
        props: {
            // first time users will not have any cookies and you may not return
            // undefined here, hence ?? is necessary
            cookies: req.headers.cookie ?? "",
        },
    }
}