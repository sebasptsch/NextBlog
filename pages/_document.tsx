import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="/fonts/FiraCode.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={"dark"} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
