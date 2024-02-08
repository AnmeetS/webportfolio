import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
const Archive = () => {
  const [showMore, setshowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">More Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 lgl:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectCard
            title="Sticker Detector"
            des="A custom sticker detecting vision system created for the Toyota Innovation Challenge to asses hole coverage and identify wrinkles of a circular sticker."
            listItem={["Python", "OpenCV", "PyTorch"]}
            githubRedirect="https://github.com/asyf16/Toyota-Innovation-Challenge?tab=readme-ov-file"
            genRedirect="https://devpost.com/software/toyota-innovation-challenge"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ProjectCard
            title="Weather App"
            des="An interactive weather application to display weather data. Ingested data from OpenWeatherMapAPI using HTTP request methods. Displayed using winforms."
            listItem={["C#"]}
            githubRedirect="https://github.com/AnmeetS/C-Weather-Application"
            genRedirect="/underconstruction"
          />
        </motion.div>
        {showMore && <><motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectCard
            title="Ball Game"
            des="A really simple game I made during the lockdown in 2021."
            listItem={["Unity"]}
            githubRedirect="/underconstruction"
            genRedirect="https://anmeatloaf.itch.io/3d-ball-game"
          />
        </motion.div></>}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setshowMore(false)}
            className="w-36 h-12 rounded-md text-textLighter text-[13px] border border-textLighter hover:bg-foreground duration-300 font-monoFont"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setshowMore(true)}
            className="w-36 h-12 rounded-md text-textLighter text-[13px] border border-textLighter hover:bg-foreground duration-300 font-monoFont"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};
export default Archive;
