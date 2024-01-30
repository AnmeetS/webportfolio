import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Link from "next/link";
import ScrollAnimation from "@/public/assets/ScrollAnimation.json";
import Lottie from "lottie-react";

const Banner = () => {
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I develop software.",
        "I design machines.",
        "I build things for the web.",
        "I&apos;m an adventurer.",
        "I&apos;m a dreamer.",
        "I&apos;m a gamer.",
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
      shuffle: true,
      startDelay: 700,
      backDelay: 1500,
      smartBackspace: false,
    };

    if (elRef.current) {
      const typed = new Typed(elRef.current, options);
      return () => typed.destroy();
    }
  }, []);

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
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 px-4 mdl:px-10 xl:px-4 h-full justify-center"
    >
      <div className="py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 px-4 mdl:px-10 xl:px-4 h-full justify-center">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-md font-monoFont tracking-wide text-textLighter lgl:-mb-4"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl lgl:text-6xl font-semibold flex flex-col font-titleFont"
        >
          Anmeet Sekhon
          <span className="text-4xl lgl:text-6xl text-border mt-2 lgl:mt-4 h-[4.5rem] sml:h-auto">
            <span ref={elRef}></span>
            {/*Lorem ipsum dolor sit amet.*/}
          </span>
        </motion.h1>
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm sm:text-base md:max-w-[550px] text-copyLight font-md flex flex-col"
        >
          <span>
            I am a Mechatronics Engineer passionate about robotics, machine
            learning, and embedded systems.
          </span>{" "}
          <span>
            I&apos;m currently working on{" "}
            <Link
              href="https://github.com/AnmeetS/webportfolio"
              target="_blank"
            >
              <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                this website!
                <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Link>{" "}
            as well as creating aesthetic yet functional machines and
            web applications.
          </span>
        </motion.span>
        <div className=" flex flex-col sml:flex-row items-left justify-between gap-6">
          <Link
            href="#contact"
            onClick={handleScrolll}
            className="cursor-pointer duration-300 nav-link flex-row"
          >
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-40 h-14 text-sm font-monoFont border border-textLighter rounded-md text-textLighter tracking-wide hover:bg-foreground duration-300"
            >
              Contact Me
            </motion.button>
          </Link>
          <div className="hidden">
            <div className="relative hidden sm:flex ">
              <div className="sml:absolute -top-2 right-0 w-52 h-20 bg-foreground/20 border-2 border-border rounded-2xl flex flex-col p-2 gap-2">
                <div className="font-titleFont text-copyLighter text-lg">
                  I&apos;m currently working on:
                </div>
                <div className="font-bodyFont color">
                  <Link href="https://www.noormohammad.live/" target="_blank">
                    <span className="text-textLighter inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                      This Website
                      <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="#about"
        onClick={handleScrolll}
        className="cursor-pointer duration-300 nav-link"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-row justify-center items-center"
        >
          <Lottie className="sm:w-14" animationData={ScrollAnimation} />
        </motion.div>
      </Link>
    </section>
  );
};

export default Banner;