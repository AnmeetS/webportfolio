import Left from "@/components/Left";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anmeet</title>
        <meta name="description" content="Created By Anmeet Sekhon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qr.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-background text-copyLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-foreground scrollbar-thumb-border">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-start">
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{delay:1, duration:1}}
           className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <Left />
          </motion.div>
          <motion.div className="h-full mx-auto p-4 w-full">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </motion.div>
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{delay:1, duration:1}}
           className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <Right />
          </motion.div>
        </div>
      </main>
    </>
  );
}
