import { motion } from "framer-motion";

interface Props {
    title: string;
}

const TitleCreator = ({title}: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        <motion.div 
        initial={{opacity:0, y:10, x:-10}}
        whileInView={{opacity:1, y:0, x:0}}
        transition ={{duration:0.5,delay:0.2}}
        >
          <span className="text-primaryLight mr-2">{"//"}</span>
          {title}
        </motion.div>
        <motion.div
         initial={{opacity:0, y:10, x:10}}
         whileInView={{opacity:1, y:0, x:0}}
         transition ={{duration:0.5,delay:0.2}}
        >
          <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-textLight ml-6 mb-2"></span>
        </motion.div>
    </h2>
  )
}

export default TitleCreator