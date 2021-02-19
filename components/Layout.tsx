import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
    // console.log(props.children)
    return (
        <>
            <Nav />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}
