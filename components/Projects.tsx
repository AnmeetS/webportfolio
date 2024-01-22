import Image from "next/image"
import TitleCreator from "./TitleCreator"
import { melman } from "@/public/assets"
import { TbBrandGithub, TbBrandYoutube, TbFileExport } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx"

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <TitleCreator title="Projects"/>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1*/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-start z-10">
              <p className="font-titleFont text-textLighter text-sm tracking-wide">
                Mechanical Design
              </p>
              <h3 className="text-2xl font-bold">
                Melman - FRC Team 1325
              </h3>
              <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                <span>A 125lb robot designed to compete in the 2023 FIRST Robotics Competition (Charged Up).</span>
                <span> Secured <span className="text-textLighter">1st</span> place in 2 district championships, ranking <span className="text-textLighter">3rd</span> in Canada, <span className="text-textLighter">23rd</span> worldwide</span>
              </p>
              <ul 
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest"
              >
                <li>Solidworks</li>
                <li>3 DOF</li>
                <li>Custom Gearboxes</li>
                <li>Forward/Inverse Kinematics</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://github.com/anmeets"
                target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://mailchimp.com/resources/404-page/"
                target="_blank"
                >
                  <TbBrandYoutube />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                target="_blank"
                >
                  <TbFileExport  />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https:anmeetsekhon.com/melman"
                target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
            <a 
            className=" xl:w-1/2 xl:h-auto relative group"
            href="https:anmeetsekhon.com/melman" 
            target="_blank"
            >
              <div>
                <Image 
                className="grayscale hover:grayscale-0 w-full w-auto mdl:h-[50vh] xl:h-auto object-contain rounded-lg border-2 border-textLight duration-300 xl:-ml-16"
                src={melman} 
                alt="MelmanProject"
                />
              </div>
            </a>
          </div>
        </div>
        {/* Project 2*/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-end z-10 xl:-ml-16">
              <p className="font-titleFont text-textLighter text-sm tracking-wide">
                Mechanical Design
              </p>
              <h3 className="text-2xl font-bold">
                Melman - FRC Team 1325
              </h3>
              <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                <span>A 125lb robot designed to compete in the 2023 FIRST Robotics Competition (Charged Up).</span>
                <span> Secured <span className="text-textLighter">1st</span> place in 2 district championships, ranking <span className="text-textLighter">3rd</span> in Canada, <span className="text-textLighter">23rd</span> worldwide</span>
              </p>
              <ul 
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest"
              >
                <li>Solidworks</li>
                <li>3 DOF</li>
                <li>Custom Gearboxes</li>
                <li>Forward/Inverse Kinematics</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://github.com/anmeets"
                target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://mailchimp.com/resources/404-page/"
                target="_blank"
                >
                  <TbBrandYoutube />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                target="_blank"
                >
                  <TbFileExport  />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https:anmeetsekhon.com/melman"
                target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
            <a 
            className=" xl:w-1/2 xl:h-auto relative group"
            href="https:anmeetsekhon.com/melman" 
            target="_blank"
            >
              <div>
                <Image 
                className="grayscale hover:grayscale-0 w-full w-auto mdl:h-[50vh] xl:h-auto object-contain rounded-lg border-2 border-textLight duration-300"
                src={melman} 
                alt="MelmanProject"
                />
              </div>
            </a>
          </div>
        </div>
        {/*Project 3*/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 flex flex-col gap-6 items-start z-10">
              <p className="font-titleFont text-textLighter text-sm tracking-wide">
                Mechanical Design
              </p>
              <h3 className="text-2xl font-bold">
                Melman - FRC Team 1325
              </h3>
              <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
                <span>A 125lb robot designed to compete in the 2023 FIRST Robotics Competition (Charged Up).</span>
                <span> Secured <span className="text-textLighter">1st</span> place in 2 district championships, ranking <span className="text-textLighter">3rd</span> in Canada, <span className="text-textLighter">23rd</span> worldwide</span>
              </p>
              <ul 
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest"
              >
                <li>Solidworks</li>
                <li>3 DOF</li>
                <li>Custom Gearboxes</li>
                <li>Forward/Inverse Kinematics</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://github.com/anmeets"
                target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://mailchimp.com/resources/404-page/"
                target="_blank"
                >
                  <TbBrandYoutube />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                target="_blank"
                >
                  <TbFileExport  />
                </a>
                <a 
                className=" hover:text-textLighter duration-300"
                href="https:anmeetsekhon.com/melman"
                target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
            <a 
            className=" xl:w-1/2 xl:h-auto relative group"
            href="https:anmeetsekhon.com/melman" 
            target="_blank"
            >
              <div>
                <Image 
                className="grayscale hover:grayscale-0 w-full w-auto mdl:h-[50vh] xl:h-auto object-contain rounded-lg border-2 border-textLight xl:-ml-16 duration-300"
                src={melman} 
                alt="MelmanProject"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects