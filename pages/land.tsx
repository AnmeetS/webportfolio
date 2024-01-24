import Grid from "@/components/gridbackground/Grid";
import Pattern from "@/components/gridbackground/Pattern";
import React, { useEffect, useState } from 'react';
import Head from "next/head"; 
import Link from "next/link";// Import your global CSS file
import { motion } from "framer-motion";
import Typed from "typed.js";
import Landing from "@/components/landing/Landing";

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
          <Pattern />
          <Grid />
          <Landing />
        </div>
      </main>
    </>
    
  );
}

