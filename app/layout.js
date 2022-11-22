import { Suspense } from "react";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Loading from "./loading";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import company from "../data/company.json";
const inter = Inter();

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Suzuki Rosebank</title>
      </head>
      <body className="flex flex-col min-h-screen scroll-smooth">
        <header className="bg-white sticky top-0 z-50">
          <NavBar {...company} />
        </header>

        <main className="flex-grow">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <footer>
          <Footer {...company} />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
