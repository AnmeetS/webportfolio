import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import WorkCreator from "./WorkCreator";

const WEAccelerate = () => {
  return (
    <WorkCreator 
        role= "Finance Project: Financial Investment Coach"
        location= "WE Accelerate Program @ UW "
        timeline= "Jan 2024 - April 2024"
        listItem={[
                    "Prototyped a trading platform that utilizes AI to coach users through investments in the market",
                    "Created and maintained Azure resource groups, compute services, containers and databases for project solution",
                    "Completed AZ-900 and AI-900 certifications, exploring Azure cloud computing services for AI application",
                ]}
    />
  )
}

export default WEAccelerate