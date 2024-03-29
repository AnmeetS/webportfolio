import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";

const oof = -50;
const dur = 0.5;
const del = 0.1;

const Navbar = () => {
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
    <div className="w-full shadow-navbarShadow h-20 lg:h-[10vh] sticky top-0 z-40 bg-background/20 backdrop-blur-sm px-4">
      <div className="max-w-container h-full mx-auto py-1 font-monoFont flex flex-col xs:flex-row items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-spaceFont font-bold text-primaryLight text-2xl">
              AnmeetS.
              <span className="inline-flex bg-transparent w-[2px] h-[4px]"></span>
              <motion.span
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: [0, 0, 1, 1, 0, 0] }} // Keyframes for opacity
                transition={{
                  Times: [0, 0.529, 0.53, 1.059, 1.06], // Times for each keyframe
                  duration: 1.06, // Total duration of one cycle
                  repeat: Infinity, // Repeat indefinitely
                  repeatType: "loop", // Loop the animation
                }}
                className="inline-flex bg-copyLight w-[10px] h-[4px]"
              ></motion.span>
            </h1>
          </motion.div>
        </Link>

        <div className="hidden lg:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScrolll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: oof, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: dur }}
              >
                <span className="text-primaryLight">{"//"}</span> Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScrolll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: oof, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: dur, delay: del * 1 }}
              >
                <span className="text-primaryLight">{"//"}</span> About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScrolll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: oof, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: dur, delay: del * 2 }}
              >
                <span className="text-primaryLight">{"//"}</span> Experience
              </motion.li>
            </Link>
            <Link
              href="#projects"
              onClick={handleScrolll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: oof, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: dur, delay: del * 3 }}
              >
                <span className="text-primaryLight">{"//"}</span> Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScrolll}
              className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: oof, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: dur, delay: del * 4 }}
              >
                <span className="text-primaryLight">{"//"}</span> Contact
              </motion.li>
            </Link>
          </ul>
          <Link href="/assets/Anmeet_S_Software_Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: del * 5 }}
              className="px-4 py-2 rounded-md text-textLighter text-[13px] border-dashed border-2 hover:border-solid thickness:border-[2px] border-sborder hover:bg-sforeground duration-300 font-bold"
            >
              Resume
            </motion.button>
          </Link>
          <div className="hidden w-auto lg:flex xl:hidden items-center justify-between text-lg gap-2">
            <Link href="https://github.com/AnmeetS" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/anmeets/" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center text-2xl justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <TiSocialLinkedin />
              </span>
            </Link>
            <Link href="https://www.instagram.com/anmeetloaf/" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
              </span>
            </Link>
          </div>
        </div>
        {/* Mobile Icon Section */}
        <div className="flex flex-row lg:hidden items-center justify-between gap-6">
          <div className="w-auto flex items-center justify-between text-lg gap-2">
            <Link href="https://github.com/AnmeetS" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/anmeets/" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center text-2xl justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <TiSocialLinkedin />
              </span>
            </Link>
            <Link href="https://www.instagram.com/anmeetloaf/" target="_blank">
              <span className="w-8 h-8 bg-foreground rounded-full inline-flex items-center justify-center hover:text-primaryLight cursor:pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
              </span>
            </Link>
          </div>
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textLight cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-primaryLight inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-primaryLight inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-primaryLight inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        </div>
        <AnimatePresence>
          {showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className="absolute lg:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end "
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                
                className="w-[75%] sm:w-[300px] h-full bg-foreground flex flex-col items-center px-4 py-10 relative "
              >
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textLighter cursor-pointer hover:text-error absolute top-4 right-4"
                />
                <div className="flex flex-col text-base gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    <Link
                      href="#home"
                      onClick={handleScrolll}
                      className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: oof, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: dur }}
                      >
                        <span className="text-primaryLight">{"//"}</span> Home
                      </motion.li>
                    </Link>
                    <Link
                      href="#about"
                      onClick={handleScrolll}
                      className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: oof, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: dur, delay: del * 1 }}
                      >
                        <span className="text-primaryLight">{"//"}</span> About
                      </motion.li>
                    </Link>
                    <Link
                      href="#experience"
                      onClick={handleScrolll}
                      className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter  cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: oof, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: dur, delay: del * 2 }}
                      >
                        <span className="text-primaryLight">{"//"}</span>{" "}
                        Experience
                      </motion.li>
                    </Link>
                    <Link
                      href="#projects"
                      onClick={handleScrolll}
                      className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: oof, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: dur, delay: del * 3 }}
                      >
                        <span className="text-primaryLight">{"//"}</span>{" "}
                        Projects
                      </motion.li>
                    </Link>
                    <Link
                      href="#contact"
                      onClick={handleScrolll}
                      className="flex items-center gap-1 font-medium text-textLight hover:text-textLighter  cursor-pointer duration-300 nav-link"
                    >
                      <motion.li
                        initial={{ y: oof, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: dur, delay: del * 4 }}
                      >
                        <span className="text-primaryLight">{"//"}</span>{" "}
                        Contact
                      </motion.li>
                    </Link>
                  </ul>
                  <Link
                    className="py-2"
                    href="/assets/Anmeet_S_Software_Resume.pdf"
                    target="_blank"
                  >
                    <motion.button
                      initial={{ y: oof, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: dur, ease: "linear" }}
                      className="px-4 py-2 rounded-md text-textLighter text-[13px] border-dashed border-2 hover:border-solid thickness:border-[2px] border-sborder hover:bg-sforeground duration-300 font-bold"
                    >
                      Resume
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
