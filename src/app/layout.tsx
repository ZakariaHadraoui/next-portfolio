import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { NavBar } from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
	title: 'Zakinnovate original portfolio',
	description: 'Zakinnovate is a digital agency specializing in creative, innovative, and user-centric design solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
                  <NavBar/>

         
           {children}
          
        </Providers>
        <Footer/>
      </body>
    </html>
  );
}
