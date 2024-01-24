import React from "react";

const temp = () =>{
    return(
        <div>
            Temp
        </div>
    )
}

export default temp


/* sliding in link 
<Link href="https://www.noormohammad.live/" target="_blank">
<span className="text-textLighter inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
Learn more
<span className="absolute w-full h-[1px] bg-textLighter left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
</span>
</Link>
*/
/*
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
                <div className="hidden lgl:inline-block absolute w-full h-80 bg-textLighter/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </motion.div>
          */