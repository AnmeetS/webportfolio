import React, { useEffect, useState } from "react";
import Head from "next/head";
import CurrentlyPlaying from "@/components/spotify/CurrentlyPlaying";
import WebsiteProject from "@/components/main/projectinfo/WebsiteProject";
import MelmanProject from "@/components/main/projectinfo/MelmanProject";
import RubiksCubeProject from "@/components/main/projectinfo/RubiksCubeProject";
import HandyMouseProject from "@/components/main/projectinfo/HandyMouseProject";

export default function land() {
  return (
    <>
      <Head>
        <title>Anmeet&apos;s Website</title>
        <meta name="description" content="Created By Anmeet Sekhon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qr.ico" />
      </Head>
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight ">
        <div className="w-screen h-screen font-bodyFont bg-background text-copyLight relative">
          <CurrentlyPlaying />
          <WebsiteProject />
          <MelmanProject />
          <RubiksCubeProject />
          <HandyMouseProject />
        </div>
      </main>
    </>
  );
}