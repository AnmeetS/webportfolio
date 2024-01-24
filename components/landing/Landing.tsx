import Grid from "@/components/gridbackground/Grid";
import Testing from "@/components/gridbackground/Pattern";
import React, { useEffect, useRef, useState } from 'react'; 
import Link from "next/link";// Import your global CSS file
import { motion } from "framer-motion";
import Typed from "typed.js";

const Landing = () => {
    const elRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['<p>Anmeet</p> <p>Sekhon</p>'],
            typeSpeed: 50,
            backSpeed: 100,
            loop: false,
            startDelay:700,
            backDelay: 1500,
            smartBackspace:false,
            showCursor:false,
        };

        if (elRef.current) {
            const typed = new Typed(elRef.current, options);
            return () => typed.destroy();
        }
    }, []);

  return (
    <div className="w-screen h-auto top-48 fixed flex flex-col items-center justify-center">
        <div className="w-auto p-4  flex flex-col items-center justify-center gap-40">
            <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-foreground/20 backdrop-blur-md rounded-lg p-6">
                <h1 className="font-titleFont font-bold text-4xl xs:text-5xl sm:text-6xl sml:text-7xl md:text-8xl mdl:text-9xl text-primaryLight flex flex-col text-center">
                <span ref={elRef}></span>
                </h1>
            </motion.div>
            <div className="w-full flex flex-row items-center justify-center gap-8">
                <div>
                    <Link href="/assets/Anmeet_S_Software_Resume.pdf" target="_blank">
                        <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-auto h-auto text-sm font-monoFont border-2 border-textLighter rounded-md text-textLighter tracking-wide bg-foreground hover:bg-border duration-300 p-4"
                        >
                            My Resume
                        </motion.button>
                    </Link>
                </div>
                <div>
                    <Link href="/homepage" target="">
                    <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-auto h-auto text-sm font-monoFont border-2 border-textLighter rounded-md text-textLighter tracking-wide bg-foreground hover:bg-border duration-300 p-4"
                    >
                    Visit Site
                    </motion.button>
                    </Link>
                </div>
            </div>
        </div> 
    </div>
  )
}
export default Landing