import { Noto_Serif_JP } from "@next/font/google";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";
import Head from "next/head";

const notoSerifJp = Noto_Serif_JP({
  weight: ["700", "500", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>With Product</title>
        <meta
          name="description"
          content={
            "Width ProductはWith企画が運営する古物商の事業会社です。高品質な商品のみを扱い、お客様の満足度を第一に掲げて日々活動しております。"
          }
        />
      </Head>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
          html {
            font-family: ${notoSerifJp.style.fontFamily};
            color: #111;
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
