import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar/navbar";
import Footer_Signup from "./components/layout/Footer/footer-signup";
import Footer from "./components/layout/Footer/footer";

export const metadata: Metadata = {
    title: "Netflix Clone",
    description: "Created by CJ Drix",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="relative bg-black font-helvetica">
                <header className="absolute w-full z-10 ">
                    <Navbar />
                </header> 
                <main>
                    {children}
                </main>
                <footer className="w-full">
                    <Footer_Signup />
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
