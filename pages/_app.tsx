import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Created By Anmeet Sekhon" />
        {/*Embed Tags*/}
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Anmeet Sekhon" />
        <meta
          property="og:description"
          content="Anmeet Sekhon is a mechatronics engineer who specializes in creating exceptional machines and robots."
        />
        <meta
          property="og:image"
          content="/assets/images/homepagewithoutstars.jpg"
        />
        <meta property="og:url" content="https://anmeetsekhon.com/" />
        <meta property="og:type" content="article" />

        {/* oEmbed Link */}
        <link type="application/json+oembed" href="/oEmbed.json" />

        {/* Additional Tags */}
        {/* Theme Color for Sidebar */}
        <meta name="theme-color" content="#9e87c5" />

        {/* Twitter Card for Large Image Display */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/code.ico" />
        <title>Anmeet Sekhon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
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
