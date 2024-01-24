import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Splashscreen from "@/components/Splashscreen";

export default function Document() {
  const pathname = usePathname();
  const isHome = pathname == "/homepage";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    setIsLoading(isHome);
  }, [isHome]);

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sf-mono"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/sf-ui-text-2"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        {isLoading && isHome ? (
          <Splashscreen />
        ) : (
          <>
            <Main />
            <NextScript />
          </>
        )}
      </body>
    </Html>
  );
}
