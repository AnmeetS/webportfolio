import TitleCreator from "./TitleCreator"
import { DiCodeBadge, DiPython, DiReact, DiJavascript1 } from "react-icons/di";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Image from "next/image"
import { anmeet } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <TitleCreator title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-10">
        <div className="w-full lgl:w-2/3 text-base text-copyLight font-medium flex flex-col">
          <h2 className="text-copyLightest text-sm -ml-4 py-1">&lt;h3&gt;</h2> 
          <div className="flex flex-col gap-4 relative pl-4">
            <span className="absolute w-[2px] bg-border top-0 bottom-0 left-0"></span>
            <p>
              I&apos;m Anmeet, a <span className="text-textLighter">Mechatronics Engineering</span>  student at the <span className="text-textLighter">University of Waterloo</span>. I&apos;m deeply passionate about embedded systems and machine learning. My technical foundation in Java, C++, and Python has led me to explore the fascinating world of automating tasks using machine learning models.
            </p>
            <p>
              My comfort in both mechanical and software domains allows me to rapidly prototype and validate projects from multiple perspectives. Whether it&apos;s the programmer&apos;s logic or the designer&apos;s vision in an embedded system, I consider all angles.
            </p>
            <p>  
              This unique blend of technical prowess and hands-on experience makes me a versatile and valuable asset for any innovative project, effectively bridging the gap between programming, mechanical design, and the forefront of technology.
            </p>
          </div>
          <h2 className="text-copyLightest text-sm -ml-4 py-1">&lt;/h3&gt;</h2>{" "}
          <p><br></br>Here are some of the tools and software I"ve recently worked with:</p>
          <ul className="max-w-[500px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-2xl"><DiCodeBadge /></span>C++/C/Java (OOP)</li>
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-2xl"><DiCodeBadge /></span>Matlab (Machine/Deep Learning)</li>
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-2xl"><DiPython/></span>Python (OpenCV, Pytorch)</li>
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-2xl"><DiJavascript1 /></span>Javascript/Typescript</li>
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-2xl"><DiReact /></span>React.js/Next.js</li>
            <li className="flex items-center gap-2 text-copyLight"><span className="text-textLighter text-lg"><FaScrewdriverWrench /></span>SolidWorks</li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
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
        </div>
      </div>
    </section>
  )
}

export default About