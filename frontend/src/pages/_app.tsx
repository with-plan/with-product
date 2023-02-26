import { Noto_Serif_JP } from "@next/font/google";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";

const notoSerifJp = Noto_Serif_JP({
  weight: ["700", "500", "400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", // ここが大事
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${notoSerifJp.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
