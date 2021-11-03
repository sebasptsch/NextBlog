import { Chakra } from "@/utils/chakra";
import { DefaultSeo } from "next-seo";
import "react-static-tweets/styles.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_AU",
          url: "https://sebasptsch.dev/",
          site_name: "Sebastian Pietschner - Developer and Student",
        }}
        twitter={{
          handle: "@sebasptsch",
          site: "@sebasptsch",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </Chakra>
  );
}
export { getServerSideProps } from "@/utils/chakra";
export default MyApp;
