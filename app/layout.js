import "../styles/globals.css";
import { Inter } from "@next/font/google";

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
      <body className="flex flex-col min-h-screen">
        <header className="bg-white sticky top-0 z-50">
          <NavBar {...company} />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer {...company} />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;