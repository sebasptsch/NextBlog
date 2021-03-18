import MDXComponents from "@/components/MDXComponents";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "./prism.css";

const theme = extendTheme({
  components: {
    Code: {
      baseStyle: {
        fontFamily: "Fira Code",
      },
    },
  },
  styles: {
    global: (props) => ({
      p: {
        color: props.colorMode === "dark" ? "gray.300" : "gray.700",
      },
      li: {
        color: props.colorMode === "dark" ? "gray.300" : "gray.700",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
