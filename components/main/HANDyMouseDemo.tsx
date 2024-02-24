import Link from "next/link";
import HandtrackingTrial from "../handTracking/HandtrackingTrial";
import Popup from "../handTracking/Popup";
import {motion } from "framer-motion";

const HANDyMouseDemo = () => {
  return (
    <div className="w-full h-full">
      <div className="hidden xl:block">
        <HandtrackingTrial />
      </div>
      <div className="xl:hidden absolute inset-0 flex flex-col justify-center">
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <div>
            <Link href="/" target="">
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-auto h-auto text-sm font-monoFont border-2 border-textLighter rounded-md text-textLighter tracking-wide bg-foreground hover:bg-border duration-300 p-4"
              >
                Homepage
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Popup />
      </div>
    </div>
  );
};
export default HANDyMouseDemo;
