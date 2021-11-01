import { Chakra } from "@/utils/chakra";
import { SessionProvider } from "next-auth/react";
import 'react-static-tweets/styles.css';
// import "./prism.css";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Chakra>
	);
}
export { getServerSideProps } from "@/utils/chakra";
export default MyApp;
