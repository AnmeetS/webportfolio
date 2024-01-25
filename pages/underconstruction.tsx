import Head from "next/head";
import Sadface from "@/components/other/Sadface";
import Pattern from "@/components/gridbackground/Pattern";
import Grid from "@/components/gridbackground/Grid";

export default function Home() {
  
  return (        
  <>
    <Head>
      <title>lmk if u noticed this!</title>
      <meta name="description" content="Created By Anmeet Sekhon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/qr.ico" />
    </Head>
    <main className="w-screen h-screen font-bodyFont bg-background text-copyLight ">
      <div className="w-screen h-screen font-bodyFont bg-background text-copyLight relative">
        <Sadface />
        <Pattern />
        <Grid />
      </div>
    </main>
  </>
  
  );
}
