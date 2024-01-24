import Left from "@/components/main/Left";
import Navbar from "@/components/main/Navbar";
import Right from "@/components/main/Right";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/main/Banner";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Archive from "@/components/main/Archive";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Grid from "@/components/gridbackground/Grid";
import SepNavbar from "@/components/archive/SepNavbar";

export default function Home() { 
  return (
    <>
      <Head>
        <title>Anmeet&apos;s Website</title>
        <meta name="description" content="Created By Anmeet Sekhon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qr.ico" />
      </Head>
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-background scrollbar-thumb-border ">
        <SepNavbar />
        <div className="w-full h-[90vh] xl:flex items-center gap-20 justify-start">
          
        </div>
      </main>
    </>
  );
}
