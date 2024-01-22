
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section 
     id="home" 
     className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 h-full"
    >
        <motion.h3
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.6 }}
         className="text-lg font-titleFont tracking-wide text-textLighter"
        >
            Hi, I&apos;m
        </motion.h3>
        <motion.h1
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.7 }}
         className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
            Anmeet Sekhon
            <span className="text-border mt-2 lgl:mt-4">
            I make stuff... sometimes
            </span>
        </motion.h1>
        <motion.p
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.8 }}
         className="text-base md:max-w-[650px] text-copyLight font-medium"
        >
            I am a web developer with 4+ years of experience in React. I have a
            strong foundation in front-end & back-end development and am skilled in
            creating user-friendly and responsive web applications using React and
            its ecosystem. {" "}
        </motion.p>
        <a href="https://github.com/anmeets" target="_blank">
            <motion.button
             initial={{ y: 10, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.9 }}
             className="w-52 h-14 text-sm font-titleFont border border-textLighter rounded-md text-textLighter tracking-wide tracking-wide hover:bg-foreground duration-300"
            >
            Check out my latest work
            </motion.button>
        </a>
    </section>
  )
}

export default Banner