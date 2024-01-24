import { useEffect, useState } from "react";
import TitleCreator from "./TitleCreator"
import { motion } from "framer-motion"
import { TbBrandGithub } from "react-icons/tb";
import { 
    SlSocialLinkedin, 
    SlSocialInstagram,
} from "react-icons/sl";
import Link from "next/link";

const Contact = () => {
  const topics = [
    'I\'d love to chat about machine learning',
    'I\'d love to chat about embedded software',
    'I\'d love to chat about robotics',
    // Add more topics when you remember LMAOOOOOOOOOOOOOOOOOOOOO IM SO TIRED PLS HELP ME! :P
  ];
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    setSelectedTopic(topics[randomIndex]);
  }, []);

  return (
    <section 
     id="contact"
     className="max-w-contentContainer mx-auto pt-10 xl:pt-40 flex flex-col gap-12 items-center justify-center h-full"
    >
      <TitleCreator title="Contact Me"/>
      <motion.h2 
      initial = {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.1}}
      className="font-titleFont text-5xl font-semibold text-center">
        {selectedTopic}
      </motion.h2>
      <motion.span 
      initial = {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.1}}
      className="max-w-[600px] text-center text-copyLightest gap-4 flex flex-col">
        I&apos;m currently open for any new work opportunities. Whether you have a question or just want to say hi, reach out to me and I&apos;ll
        be sure to get back to you! 
        <span>
          Any feedback for the website is greatly appreciated!
        </span>
      </motion.span>
      <motion.a 
      initial = {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.1}}
      href="mailto:as2sekho@uwaterloo.ca">
        <button className="w-40 h-14 border border-textLighter mt-6 font-monoFont text-sm text-textLighter tracking-wider rounded-md hover:bg-foreground duration-300 ">
          Say Hello!
        </button>
      </motion.a>
    </section>
  )
}
export default Contact