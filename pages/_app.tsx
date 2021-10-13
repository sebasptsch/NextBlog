import { Chakra } from "@/utils/chakra";
import 'react-static-tweets/styles.css';
// import "./prism.css";



function MyApp({ Component, pageProps }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Component {...pageProps} />
		</Chakra>
	);
}
export { getServerSideProps } from "@/utils/chakra";
export default MyApp;
