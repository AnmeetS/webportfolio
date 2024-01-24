import {motion} from "framer-motion"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import WorkCreator from "./WorkCreator";

const Inqsys = () => {
  return (
    <WorkCreator 
        role= "Junior Web Developer"
        location= "Inqsys"
        timeline= "Jan 2022 - Sep 2022"
        listItem={[
                    "Designed the login page using React.js for a social media website",
                    "Implemented cross-platform usability across desktop and mobile environments",
                    "Collaborated with QA team to fix front-end bugs",
                ]}
    />
  )
}

export default Inqsys