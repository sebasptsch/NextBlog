import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import "./prism.css";

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

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
