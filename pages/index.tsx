import Left from "@/components/main/Left";
import Navbar from "@/components/main/Navbar";
import Right from "@/components/main/Right";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/main/Home";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Archive from "@/components/main/Archive";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
    
      <main className="w-screen h-screen font-bodyFont bg-background text-copyLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-background scrollbar-thumb-border ">
        <Navbar />
        <div className="w-full h-[90vh] xl:flex items-center gap-20 justify-start">
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{delay:1, duration:1}}
           className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <Left />
          </motion.div>
          <motion.div className="h-full mx-auto p-4">
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
           className="hidden xl:inline-flex w-32 h-full fixed right-4 bottom-0">
            <Right />
          </motion.div>
        </div>
      </main>
    </>
  );
}
