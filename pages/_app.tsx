import Splashscreen from "@/components/Splashscreen";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <div className="h-screen w-screen absolute pointer-events-none z-50">
        <NextNProgress
          color="#eda93a"
          startPosition={0.4}
          stopDelayMs={200}
          height={10}
          showOnShallow={true}
        />
      </div>
      <Component {...pageProps} className="" />
    </>
  );
}
