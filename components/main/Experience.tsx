import React from "react"
import TitleCreator from "./TitleCreator"
import Inqsys from "./workinfo/Inqsys"
import FRCwork from "./workinfo/FRCwork"
import Webpulse from "./workinfo/Webpulse"
import { motion } from "framer-motion"

const Experience = () => {
    const [workInqsys, setworkInqsys] = React.useState(true);
    const [workFRCwork, setworkFRCwork] = React.useState(false);
    const [workWebpulse, setworkWebpulse] = React.useState(false);
    const handleInqsys = () => {
        setworkInqsys(true);
        setworkFRCwork(false);
        setworkWebpulse(false);
    };
    const handleFRCwork = () => {
        setworkInqsys(false);
        setworkFRCwork(true);
        setworkWebpulse(false);
    };
    const handleWebpulse = () => {
        setworkInqsys(false);
        setworkFRCwork(false);
        setworkWebpulse(true);
    };

  return (
    <section
     id="experience"
     className="max-w-containerxs mx-auto px-4 py-24 lgl:py-32"
    >
        <TitleCreator title="My Experiences"/>
        <div
         className="w-full mt-10 flex flex-col md:flex-row gap-16"
        >
            <motion.ul 
            initial={{opacity:0, y:10, x:-10}}
            whileInView={{opacity:1, y:0, x:0}}
            transition ={{duration:0.5,delay:0.2}}
            className="md:w-40 flex flex-col font-bodyFont font-semibold">
                <li 
                 onClick={handleInqsys} 
                 className={`${
                    workInqsys 
                    ? "border-l-4 border-l-textLighter text-textLighter bg-foreground"
                    : "border-l-2 border-l-sborder text-copyLighter bg-transparent hover:bg-border"
                 } text-copyLighter py-3 text-sm cursor-pointer duration-300 px-8`}
                >
                    Inqsys Technologies
                </li>
                <li 
                 onClick={handleFRCwork} 
                 className={`${
                    workFRCwork
                    ? "border-l-4 border-l-textLighter text-textLighter bg-foreground"
                    : "border-l-2 border-l-sborder text-copyLighter bg-transparent hover:bg-border"
                 } text-copyLighter py-3 text-sm cursor-pointer duration-300 px-8`}
                >
                    FRC Team 1325
                </li>
                <li
                 onClick={handleWebpulse}
                 className={`${
                    workWebpulse
                    ? "border-l-4 border-l-textLighter text-textLighter bg-foreground"
                    : "border-l-2 border-l-sborder text-copyLighter bg-transparent hover:bg-border"
                 } text-copyLighter py-3 text-sm cursor-pointer duration-300 px-8`}
                >
                    WebPulse Canada
                </li>
            </motion.ul>
            <motion.div 
            initial={{opacity:0, y:10, x:10}}
            whileInView={{opacity:1, y:0, x:0}}
            transition ={{duration:0.5,delay:0.2}}
            className="shadow-navbarShadow p-4 bg-foreground rounded-lg border border-border">
                {workInqsys && <Inqsys/>}
                {workFRCwork && <FRCwork/>}
                {workWebpulse && <Webpulse/>}
            </motion.div>
        </div>
    </section>
  )
}

export default Experience