import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import WorkCreator from "./WorkCreator";

const Webpulse = () => {
  return (
    <WorkCreator 
        role= "Junior Web Designer"
        location= "Webpulse Canada"
        timeline= "Jan 2022 - Sep 2022"
        listItem={[
                    "Revamped front-end design of 5 websites using PHP, HTML/CSS & Javascript",
                    "Implemented Google Maps API",
                    "Integrated MySQL into contact forms for backend databases",
                ]}
    />
  )
}

export default Webpulse