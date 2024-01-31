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
        <div className="w-full flex flex-col items-center justify-between gap-14 pt-2">
          {/*Large Screens*/}
          <div className="hidden xl:-mt-12 w-full xl:flex flex-col items-center justify-between xl:h-[75vh] relative">
            <div className="w-full h-full ">
              <Carousel
                pauseOnHover
                slideInterval={5000}
                slide={false}
              >
                {/* Project 1*/}
                <div className="w-[75%] xl:w-full flex flex-col gap-28 pb-10 xl:pb-0">
                  <div className="flex flex-col xl:flex-row gap-6 ">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                        Web Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont">
                        This Website!
                      </h3>
                      <p className="bg-foreground/50 backdrop-blur-sm text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                        <span>
                          Created in the span of a week this website allows me
                          to showcase my portfolio of technical skills and
                          project experiences.
                        </span>
                        <span>
                          It also illustrates my understanding of SEO
                          optimization, with features like image lazy loading
                          and server-side rendering.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLighter rounded-lg bg-background/75 p-2">
                        <li>Typescript |</li>
                        <li>Nextjs |</li>
                        <li>Tailwind</li>
                      </ul>
                      <div className="text-2xl gap-4 flex rounded-full p-2 bg-background/75">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://github.com/AnmeetS/webportfolio"
                          target="_blank"
                        >
                          <TbBrandGithub />
                        </Link>
                        {/*
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://mailchimp.com/resources/404-page/"
                    target="_blank"
                    >
                      <TbBrandYoutube />
                    </Link>
                    
                    <Link 2
                    className=" hover:text-textLighter duration-300"
                    href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                    target="_blank"
                    >
                      <TbFileExport  />
                    </Link>
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="/underConstruction"
                    >
                      <RxOpenInNewWindow />
                    </Link>
                    */}
                      </div>
                    </motion.div>
                    <Link
                      className="w-full h-full fixed group items-center justify-center xl:hidden bg-white "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-full grayscale hover:grayscale-0 w-full rounded-lg duration-300 xl:-ml-16"
                          src={landing}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                    <Link
                      className="hidden w-auto xl:w-1/2 group items-center justify-center xl:block"
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="grayscale hover:grayscale-0 w-auto object-contain rounded-lg  duration-300  xl:-ml-16"
                          src={landing}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
                {/* Project 2*/}
                <div className="w-[75%] xl:w-full flex flex-col gap-28 pb-10 xl:pb-0">
                  <div className="flex flex-col xl:flex-row gap-6 ">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                        Software Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont">
                        Rubik&apos;s Cube Solving Robot
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                        <span>
                          Created over the span of 3 months for our course
                          project, this robot uses a combination of
                          color/ultrasonic sensors and motor encoders to fully
                          scan and solve a 3x3 Rubik&apos;s Cube.
                        </span>
                        <span>
                          Implemented into the code are interrupts, non-trivial
                          functions, timers, and of course the solving
                          algorithm.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
                        <li>C++ | </li>
                        <li>Robot C | </li>
                        <li>Python |</li>
                      </ul>
                      <div className="text-2xl gap-4 flex">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbFileExport />
                  </Link>
                  */}
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                          target="_blank"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                      </div>
                    </motion.div>
                    <Link
                      className="w-full h-full fixed group items-center justify-center xl:hidden bg-white "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-full grayscale hover:grayscale-0 w-full rounded-lg duration-300 xl:-ml-16"
                          src={rubiksSolver}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                    <Link
                      className="hidden w-auto xl:w-1/2 group items-center justify-center xl:block"
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="grayscale hover:grayscale-0 w-auto object-contain rounded-lg  duration-300  xl:-ml-16"
                          src={rubiksSolver}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
                {/* Project 3*/}
                <div className="w-full flex flex-col  gap-28 mt-10">
                  <div className="flex flex-col xl:flex-row gap-6 ">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                        Mechanical Design
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont">
                        Melman - FRC Team 1325
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                        <span>
                          A 125lb robot designed to compete in the 2023 FIRST
                          Robotics Competition (Charged Up).
                        </span>
                        <span>
                          {" "}
                          Secured <span className="text-textLighter">
                            1st
                          </span>{" "}
                          place in 2 district championships, ranking{" "}
                          <span className="text-textLighter">3rd</span> in
                          Canada, <span className="text-textLighter">23rd</span>{" "}
                          worldwide
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
                        <li>Solidworks</li>
                        <li>3 DOF</li>
                        <li>Custom Gearboxes</li>
                        <li>Forward/Inverse Kinematics</li>
                      </ul>
                      <div className="text-2xl gap-4 flex">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://mailchimp.com/resources/404-page/"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                          target="_blank"
                        >
                          <TbFileExport />
                        </Link>
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                        {/*
                    
                    <Link
                      className=" hover:text-textLighter duration-300"
                      href="https://github.com/AnmeetS/webportfolio"
                      target="_blank"
                    >
                      <TbBrandGithub />
                    </Link>
                    */}
                      </div>
                    </motion.div>
                    <Link
                      className="w-full h-full fixed group items-center justify-center xl:hidden bg-white "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className=" grayscale hover:grayscale-0 w-full blur-sm rounded-lg duration-300 xl:-ml-16"
                          src={melman}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                    <Link
                      className="hidden w-auto xl:w-1/2 group items-center justify-center xl:block"
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="grayscale hover:grayscale-0 w-auto object-contain rounded-lg duration-300  xl:-ml-16"
                          src={melman}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          {/*Medium Screens*/}
          <div className="block xl:hidden">
            {/* Project 1*/}
            <section id="web">
              <div className="w-full flex flex-col gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6 bg-foreground/50 rounded-xl p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full xl:w-1/2 flex flex-col gap-6 items-center text-center z-10 xl:ml-16"
                  >
                    <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                      Web Development
                    </p>
                    <h3 className="text-3xl font-bold font-titleFont">
                      This Website!
                    </h3>
                    <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                      <span>
                        Created in the span of a week this website allows me to
                        showcase my portfolio of technical skills and project
                        experiences.
                      </span>
                      <span>
                        It also illustrates my understanding of SEO
                        optimization, with features like image lazy loading and
                        server-side rendering.
                      </span>
                    </p>
                    <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
                      <li>Typescript |</li>
                      <li>Nextjs |</li>
                      <li>Tailwind |</li>
                      <li>React</li>
                    </ul>
                    <div className="text-2xl gap-4 flex">
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="https://github.com/AnmeetS/webportfolio"
                        target="_blank"
                      >
                        <TbBrandGithub />
                      </Link>
                      {/*
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://mailchimp.com/resources/404-page/"
                    target="_blank"
                    >
                      <TbBrandYoutube />
                    </Link>
                    
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                    target="_blank"
                    >
                      <TbFileExport  />
                    </Link>
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="/underConstruction"
                    >
                      <RxOpenInNewWindow />
                    </Link>
                    */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Project 2*/}
            <section id="soft">
              <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6 bg-foreground/50 rounded-xl p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full xl:w-1/2 flex flex-col gap-6 items-center text-center z-10 xl:mr-16 xl:text-right"
                  >
                    <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                      Software Development
                    </p>
                    <h3 className="text-3xl font-bold font-titleFont">
                      Rubik&apos;s Cube Solving Robot
                    </h3>
                    <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                      <span></span>
                      <span>
                        Created over the span of 3 months for our course
                        project, this robot uses a combination of
                        color/ultrasonic sensors and motor encoders to fully
                        scan and solve a 3x3 Rubik&apos;s Cube.
                      </span>
                      <span>
                        Implemented into the code are interrupts, non-trivial
                        functions, timers, and of course the solving algorithm.
                      </span>
                    </p>
                    <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
                      <li>C++ | </li>
                      <li>Robot C | </li>
                      <li>Python</li>
                    </ul>
                    <div className="text-2xl gap-4 flex">
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
                        target="_blank"
                      >
                        <TbBrandYoutube />
                      </Link>
                      {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbFileExport />
                  </Link>
                  */}
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="/underconstruction"
                        target="_blank"
                      >
                        <RxOpenInNewWindow />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/*Project 3*/}
            <section id="mech">
              <div className="w-full flex flex-col  gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6 bg-foreground/50 rounded-xl p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full xl:w-1/2 flex flex-col gap-6 items-center text-center z-10 xl:ml-16"
                  >
                    <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
                      Mechanical Design
                    </p>
                    <h3 className="text-3xl font-bold font-titleFont">
                      Melman - FRC Team 1325
                    </h3>
                    <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                      <span>
                        A 125lb robot designed to compete in the 2023 FIRST
                        Robotics Competition (Charged Up).
                      </span>
                      <span>
                        {" "}
                        Secured <span className="text-textLighter">
                          1st
                        </span>{" "}
                        place in 2 district championships, ranking{" "}
                        <span className="text-textLighter">3rd</span> in Canada,{" "}
                        <span className="text-textLighter">23rd</span> worldwide
                      </span>
                    </p>
                    <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-center items-center text-center text-copyLightest">
                      <li>Solidworks | </li>
                      <li>3 DOF | </li>
                      <li>Kinematics</li>
                    </ul>
                    
                    <div className="text-2xl gap-4 flex">
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="https://mailchimp.com/resources/404-page/"
                        target="_blank"
                      >
                        <TbBrandYoutube />
                      </Link>
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                        target="_blank"
                      >
                        <TbFileExport />
                      </Link>
                      <Link
                        className=" hover:text-textLighter duration-300"
                        href="/underconstruction"
                      >
                        <RxOpenInNewWindow />
                      </Link>
                      {/*
                    
                    <Link
                      className=" hover:text-textLighter duration-300"
                      href="https://github.com/AnmeetS/webportfolio"
                      target="_blank"
                    >
                      <TbBrandGithub />
                    </Link>
                    */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
