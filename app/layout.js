import "./globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main
            style={{ width: "100%", minHeight: "70vh", overflow: "hidden" }}
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
