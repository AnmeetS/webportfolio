import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {motion} from "framer-motion";

const Archive = () => {
    const [showMore, setshowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-titleFont font-semibold">
                Other Projects
            </h2>
            <p className="text-sm font-titleFont text-textLighter">
                View the Archive
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
            <ProjectCard 
             title="Ball Game"
             des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
             listItem={["Unity","Java","OpenCV"]}
             githubRedirect=""
             genRedirect=""
            />
            <ProjectCard 
             title="Ball Game"
             des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
             listItem={["Unity","Java","OpenCV"]}
             githubRedirect=""
             genRedirect=""
            />
            <ProjectCard 
             title="Ball Game"
             des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
             listItem={["Unity","Java","OpenCV"]}
             githubRedirect=""
             genRedirect=""
            />
            {
                showMore && (
                    <>
                        <motion.div
                        initial = {{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.1}}
                        >
                            <ProjectCard 
                            title="Ball Game"
                            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
                            listItem={["Unity","Java","OpenCV"]}
                            githubRedirect=""
                            genRedirect=""
                            />
                        </motion.div>
                        <motion.div
                        initial = {{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2}}
                        >
                            <ProjectCard 
                            title="Ball Game"
                            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
                            listItem={["Unity","Java","OpenCV"]}
                            githubRedirect=""
                            genRedirect=""
                            />
                        </motion.div>
                        <motion.div
                        initial = {{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3}}
                        >
                            <ProjectCard 
                            title="Ball Game"
                            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex quos, doloribus tenetur officia quisquam ipsum repellendus quia excepturi in."
                            listItem={["Unity","Java","OpenCV"]}
                            githubRedirect=""
                            genRedirect=""
                            />
                        </motion.div>
                    </>
                )
            }
        </div>
        <div className="mt-12 flex items-center justify-center">
            {
                showMore ? <button 
                             onClick={() => setshowMore(false)}
                             className="w-36 h-12 rounded-md text-textLighter text-[13px] border border-textLighter hover:bg-foreground duration-300"
                            >
                                Show Less
                            </button> : <button 
                                         onClick={() => setshowMore(true)}
                                         className="w-36 h-12 rounded-md text-textLighter text-[13px] border border-textLighter hover:bg-foreground duration-300"
                                        >
                                            Show More
                                        </button>
            }
        </div>
    </div>
  )
}
export default Archive