import { useState } from "react";
import Link from "next/link";
import { FaExclamation } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  // State to control the visibility of the popup
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="z-50 absolute inset-0">
          <div className="w-full h-full flex flex-row justify-center">
            <div className="w-fit flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-foreground/20 backdrop-blur-md p-4 shadow-navbarShadow rounded-2xl"
              >
                <div className="relative flex flex-col gap-4">
                  <h2 className="text-3xl font-semibold font-titleFont text-textLighter items-center justify-center flex">
                    WARNING!
                  </h2>
                  <div className="flex flex-col gap-2 text-copyLighter px-2 items-center justify-center">
                    <div className="flex flex-row gap-2">
                      <span className="text-textLighter mt-1">
                        <FaExclamation />
                      </span>
                      <p>
                        This demo as of now, is only supported on desktops, if
                        you are on a mobile device, please switch to a desktop
                        or go back to the{" "}
                        <Link href="/">
                          <span className="text-textLighter inline-flex relative cursor-pointer overflow-x-hidden group">
                            homepage
                            <span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                          </span>
                        </Link>{" "}
                        and check out some other cool stuff.
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <span className="text-textLighter mt-1">
                        <FaExclamation />
                      </span>
                      <p>
                        Please keep in mind that this is still a work in
                        progress demo. As a result, there are still a lot of
                        features (panning, zooming, etc.) that are not yet
                        implemented.
                      </p>
                    </div>
                    <div className="pt-4 w-full flex flex-row items-center justify-center gap-4">
                      <div>
                          <button
                          onClick={() => setIsVisible(false)}
                            className="w-auto h-auto text-sm font-monoFont border-2 border-textLighter rounded-md text-textLighter tracking-wide bg-foreground hover:bg-border duration-300 p-4"
                          >
                            Continue
                          </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="fixed top-4 right-4 text-3xl font-copyLighter hover:text-textLighter"
                  >
                    <MdOutlineClose />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
