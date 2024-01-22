import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Inqsys = () => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{delay:0.1, duration:0.5}}
     className="w-full h-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Junior Web Developer <span className="text-textLighter tracking-wide">@Inqsys</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-copyLighter">
            May 2023 - Sep 2023
        </p>
        <ul className="mt-3 flex flex-col gap-2">
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Designed the login page using React.js for a social media website
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Implemented cross-platform usability across desktop and mobile environments
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Collaborated with QA team to fix front-end bugs
            </li>
        </ul>
    </motion.div>
  )
}

export default Inqsys