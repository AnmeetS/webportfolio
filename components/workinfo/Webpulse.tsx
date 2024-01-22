import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Webpulse = () => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{delay:0.1, duration:0.5}}
     className="w-full h-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Web Designer<span className="text-textLighter tracking-wide">@Webpulse Canada</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-copyLighter">
            Jan 2022 - Sep 2022
        </p>
        <ul className="mt-3 flex flex-col gap-2">
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Revamped front-end design of 5 websites using PHP, HTML/CSS & Javascript
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Implemented Google Maps API
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Integrated MySQL into contact forms for backend databases
            </li>
        </ul>
    </motion.div>
  )
}

export default Webpulse