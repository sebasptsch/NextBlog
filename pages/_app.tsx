import MDXComponents from "@/components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import "./prism.css";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
