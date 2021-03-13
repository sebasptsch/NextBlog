import MDXComponents from "@/components/MDXComponents";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "./prism.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
