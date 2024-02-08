import { motion } from "framer-motion";
import Link from "next/link";
import { sadface } from "@/public/assets";
import Image from "next/image";
import { sadface2 } from "@/public/assets";

const Sadface = () => {
  return (
    <div className="fixed">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-auto h-auto flex flex-row items-center justify-center">
          <div className="w-auto p-4 flex flex-col items-center justify-center gap-16">
              <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-foreground/20 backdrop-blur-md rounded-lg p-6">
                  <h1 className="font-titleFont text-4xl xs:text-5xl sm:text-6xl sml:text-7xl md:text-8xl mdl:text-9xl flex flex-col text-center">
                    <Image src={sadface2} alt="Theres Supposed to be a silly sadface here" className="w-80"/>
                    <span className="text-error font-bold text-4xl xs:text-5xl sm:text-6xl sml:text-7xl md:text-8xl">
                      UHOH! 
                    </span>
                    <span className="font-bodyFont text-xl text-copyLighter flex flex-col text-center">
                      <span>This page is currently</span> <span className="text-md font-monoFont"><span className="text-secondary">🚧under development🚧</span></span>
                    </span>
                    <span className="font-bodyFont text-xs text-border">
                        I&apos;m so sleepy
                    </span>
                  </h1>
              </motion.div>
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
        </div>  
      </div>
    </div>
    
  )
}
export default Sadface