import { Noto_Serif_JP } from "@next/font/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const notoSerifJp = Noto_Serif_JP({
  weight: ["700", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", // ここが大事
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSerifJp.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
