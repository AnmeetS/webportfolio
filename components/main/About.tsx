import TitleCreator from "./TitleCreator";
import { DiCodeBadge, DiPython, DiReact, DiJavascript1 } from "react-icons/di";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Image from "next/image";
import { anmeet } from "@/public/assets";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const About = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScrolll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    //Updating class name of the clicked linked
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-24 lgl:py-32 flex flex-col gap-8 px-4"
    >
      <TitleCreator title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-10 h-full relative">
        <motion.div
          initial={{ opacity: 0, y: 10, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lgl:w-2/3 text-base text-copyLight font-bodyFont flex flex-col"
        >
          <h2 className="text-copyLightest text-md -ml-2 py-1 font-mono">
            &lt;h3&gt;
          </h2>
          <div className="hidden sml:flex flex-col gap-4 relative pl-4 font-bodyFont font-thin">
            <span className="absolute w-[2px] bg-border top-0 bottom-0 left-0"></span>
            <div>
              Hey! I&apos;m Anmeet, a
              <Link
                href="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
                target="_blank"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  Mechatronics Engineering student @ UW
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              and I enjoy creating things that can make my life easier. My
              interest in software development started back in 2018 when I
              decided that it would be cool to make a game on
              <Link href="https://scratch.mit.edu" target="_blank">
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  Scratch.
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              In doing so, I was consumed by the idea that I could create
              software not only for my entertainment, but also to automate tasks
              for myself. So, I set out to make an automated light switcher.
            </div>
            <div>
              Turns out, my interest in creating software never went away!
              Instead, it grew into a deep interest of all things embeded
              systems, (Mechanical, Electrical and Software Design). Fast
              forward to today, and I&apos;ve developed a foundation in
              <Link
                href="#soft"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  software development,
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              <Link
                href="#mech"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  mechanical design,
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              and
              <Link
                href="#web"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  web development
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              allowing me to effectively bridge the gap between programming,
              mechanical design, and the forefront of technology.
            </div>
            <div>
              These days, I&apos;m focused on creating custom machines to
              automate tasks. Additionally, I&apos;m exploring the world of AI
              and Machine/Deep learning to create intellegent machines. I also
              recently received
              <Link
                href="https://www.linkedin.com/in/anmeets/details/certifications/"
                target="_blank"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  certifications
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              for completing machine/deep learning courses from Mathworks!
            </div>
          </div>
          <div className="flex sml:hidden flex-col gap-4 relative pl-4 text-sm lh">
            <span className="absolute w-[2px] bg-border top-0 bottom-0 left-0"></span>
            <div>
              Hey! I&apos;m Anmeet, a
              <Link
                href="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
                target="_blank"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  Mechatronics Engineering student @ UW.
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              My journey in software began in 2018 with a simple game I made on
              <Link href="https://scratch.mit.edu" target="_blank">
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  Scratch,
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
               sparking a passion of all things embeded systems, (Mechanical,
              Electrical and Software Design).
            </div>
            <div>
              Fast forward to today, and I&apos;ve developed a foundation in
              <Link
                href="#soft"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  software development,
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              <Link
                href="#mech"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  mechanical design,
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              and
              <Link
                href="#web"
                onClick={handleScrolll}
                className="cursor-pointer duration-300 nav-link"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  web development
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>
              allowing me to effectively bridge the gap between programming,
              mechanical design, and the forefront of technology.
            </div>
            <div>
              These days, I&apos;m focused on creating custom machines to
              automate tasks. Additionally, I&apos;m exploring the world of
              Machine/Deep learning to create intellegent machines. I also
              recently received{" "}
              <Link
                href="https://www.linkedin.com/in/anmeets/details/certifications/"
                target="_blank"
              >
                {" "}
                <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                  certifications
                  <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>{" "}
              </Link>{" "}
              for completing machine/deep learning courses from Mathworks!
            </div>
          </div>
          <h2 className="text-copyLightest text-md -ml-2 py-1 font-mono">
            &lt;/h3&gt;
          </h2>{" "}
          <div>
            <br></br>Here are some of the tools and software I&apos;ve recently
            worked with:
          </div>
          <ul className="max-w-[500px] text-sm grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-2xl">
                <DiCodeBadge />
              </span>
              C++ / C / Java (OOP)
            </li>
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-2xl">
                <DiCodeBadge />
              </span>
              Matlab (Machine / Deep Learning)
            </li>
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-2xl">
                <DiPython />
              </span>
              Python (OpenCV, Pytorch)
            </li>
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-2xl">
                <DiJavascript1 />
              </span>
              Javascript / Typescript
            </li>
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-2xl">
                <DiReact />
              </span>
              React.js / Next.js
            </li>
            <li className="flex items-center gap-2 text-copyLight">
              <span className="text-textLighter text-lg">
                <FaScrewdriverWrench />
              </span>
              SolidWorks
            </li>
          </ul>
        </motion.div>
        <div className="h-auto w-full lgl:w-1/3 flex-col lgl:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 10, x: 10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-80 relative group"
          >
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                  className="rounded-lg h-full object-cover"
                  src={anmeet}
                  alt="profileImg"
                />
                <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
