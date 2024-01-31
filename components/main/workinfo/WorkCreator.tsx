import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface Props {
    role: string;
    location: string;
    timeline: string;
    listItem:string[];
}

const WorkCreator = ({role, location, timeline, listItem,}: Props) => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{delay:0.1, duration:0.5}}
     className="w-full h-full"
    >
        <h3 className="flex gap-1 font-bold text-xl font-titleFont ">
            {role} <span className="text-textLighter tracking-wide">@{location}</span>
        </h3>
        <p className="text-sm mt-1 font-medium font-monoFont text-copyLighter">
            {timeline}
        </p>
        <ul className="mt-3 flex flex-col gap-2 font-bodyFont font-thin">
            {
                listItem.map((item,index) => (
                    <li 
                     className="text-base flex gap-2 text-copyLight" 
                     key={index}
                    >
                        <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span>
                        {item}
                    </li>
                ) )
            }
        </ul>
    </motion.div>
  )
}
export default WorkCreator