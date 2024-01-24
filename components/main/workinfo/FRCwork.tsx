import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import WorkCreator from "./WorkCreator";

const FRCwork = () => {
  return (
    <WorkCreator 
        role= "Design Lead"
        location= "FRC Team 1325"
        timeline= "October 2022 - June 2023"
        listItem={[
                    "Secured 1st place in 2 district championships, ranking 3rd in Canada, 23rd worldwide",
                    "Trained 15+ members in Solidworks",
                    "Designed a 3-point arm subsystem with custom gearboxes and aircraft cable pulley systems",
                    "Implemented forward/inverse kinematics for precise control",
                    "Designed a custom mounting block for integration between off-the-shelf and custom gearboxes",
                    "Selected robot materials and parts based on calculations of torsional stress limits and gear reductions",
                ]}
    />
  )
}

export default FRCwork