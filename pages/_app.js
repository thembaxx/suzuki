import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
