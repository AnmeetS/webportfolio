import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const FRCwork = () => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{delay:0.1, duration:0.5}}
     className="w-full h-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Design Lead <span className="text-textLighter tracking-wide">@FRC Team 1325</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-copyLighter">
            October 2022 - June 2023
        </p>
        <ul className="mt-3 flex flex-col gap-2">
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Secured 1st place in 2 district championships, ranking 3rd in Canada, 23rd worldwide
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Trained 15+ members in Solidworks
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Designed a 3-point arm subsystem with custom gearboxes and aircraft cable pulley systems
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Implemented forward/inverse kinematics for precise control
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Designed a custom mounting block for integration between off-the-shelf and custom gearboxes
            </li>
            <li className="text-base flex gap-2 text-copyLight">
                <span className="text-textLighter mt-1"><MdOutlineKeyboardDoubleArrowRight/></span> Selected robot materials and parts based on calculations of torsional stress limits and gear reductions
            </li>
        </ul>
    </motion.div>
  )
}

export default FRCwork