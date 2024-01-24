import { useState } from "react";
import { LuInfo } from "react-icons/lu";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center p-10">
      <div className="flex flex-row items-center justify-center font-monoFont gap-6">
        <span>Made by Anmeet with ❤️ & ☕</span>
        <span
          className="text-2xl cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        >
          <LuInfo />
        </span>
      </div>

      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-x-0 bottom-1/4 mx-auto  w-[87.5%] mdl:w-[66%] xl:w-1/2 p-4 bg-foreground/20 rounded-lg shadow-navbarShadow backdrop-blur-md"
        >
          <div className="relative flex flex-col gap-4 pb-4">
            <h2 className="text-xl font-semibold font-titleFont text-textLighter">
              Credits
            </h2>
            <div className="flex flex-col gap-2 text-copyLighter px-2">
              <div className="flex flex-row gap-2">
                <span className="text-textLighter mt-1">
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
                <p>
                  Major thanks to
                  <Link href="https://brittanychiang.com" target="_blank">
                    {" "}
                    <span className="text-textLighter inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                      Brittany Chiang
                      <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                  </Link>{" "}
                  &
                  <Link href="https://tamalsen.dev" target="_blank">
                    {" "}
                    <span className="text-textLighter inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                      Tamal Sen
                      <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                  </Link>{" "}
                  for layout inspiration
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-textLighter mt-1">
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
                <p>
                  Idk what else to put here...
                  
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-textLighter mt-1">
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
                <p>
                  If you see something of yours that I didnt credit I apologize in advance. Just send me an email and I&apos;ll get it fixed right away!
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-textLighter mt-1">
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
                <p>
                  If you&apos;re still reading this, please lmk if you have any feedback for the website :D
                </p>
              </div>
            </div>
            <button
              className="fixed top-4 right-4 text-3xl font-copyLighter hover:text-textLighter"
              onClick={() => setIsPopupOpen(false)}
            >
              <MdOutlineClose />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Footer;
