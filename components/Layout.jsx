import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
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
