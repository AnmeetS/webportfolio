import Image from "next/image";
import TitleCreator from "./TitleCreator";
import {
  landing,
  melman,
  rubiksSolver,
  toyotaChallenge,
} from "@/public/assets";
import { TbBrandGithub, TbBrandYoutube, TbFileExport } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import WebsiteProject from "./projectinfo/WebsiteProject";
import MelmanProject from "./projectinfo/MelmanProject";
import RubiksCubeProject from "./projectinfo/RubiksCubeProject";
import HandyMouseProject from "./projectinfo/HandyMouseProject";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-container mx-auto lgl:px-20 lgl:py-32 py-24 px-4"
    >
      <span className="hidden xl:flex">
        <TitleCreator title="Projects" />
      </span>
      <span className="flex xl:hidden items-center justify-center">
        <TitleCreator title="Projects" />
      </span>
      <div className="w-full flex flex-col items-center justify-between relative">
        <Carousel pauseOnHover slideInterval={5000} slide={false} leftControl="<" rightControl=">" className="py-4">
          <WebsiteProject />
          <MelmanProject />
          <RubiksCubeProject />
          <HandyMouseProject />
        </Carousel>
        
      </div>
    </section>
  );
};

export default Projects;
