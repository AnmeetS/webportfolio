import React from "react";

const temp = () =>{
    return(
        <div>
            Temp
        </div>
    )
}

export default temp

 {/*
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

          {/*Small Screens*/}
          <div className="flex flex-col gap-12 mdl:hidden">
            {/* Project 1*/}
            <section id="web">
              <div className="w-full flex flex-col gap-32 mt-10">
                <div className="relative h-[40vh]">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center"
                    >
                      <div className="z-20 p-2 w-full bg-border/50 flex flex-col gap-6 items-center backdrop-blur-sm rounded-lg">
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Web Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        This Website!
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          Created in the span of a week this website allows me
                          to showcase my portfolio of technical skills and
                          project experiences.
                        </span>
                        <span>
                          It also illustrates my understanding of SEO
                          optimization, with features like image lazy loading
                          and server-side rendering.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>Typescript |</li>
                        <li>Nextjs |</li>
                        <li>Tailwind |</li>
                        <li>React</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://github.com/AnmeetS/webportfolio"
                          target="_blank"
                        >
                          <TbBrandGithub />
                        </Link>
                        {/*
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://mailchimp.com/resources/404-page/"
                    target="_blank"
                    >
                      <TbBrandYoutube />
                    </Link>
                    
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                    target="_blank"
                    >
                      <TbFileExport  />
                    </Link>
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="/underConstruction"
                    >
                      <RxOpenInNewWindow />
                    </Link>
                    */}
                      </div>

                      </div>
                      
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex">
                    <Link
                      className="object-cover group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] grayscale hover:grayscale-0 rounded-lg duration-300"
                          src={landing}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Project 2*/}
            <section id="web">
              <div className="w-full flex flex-col gap-28 mt-10">
                <div className="relative h-[40vh]">
                  <div className="z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-20 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Software Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        Rubik&apos; Cube Solving Robot
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          Created over the span of 3 months for our course
                          project, this robot uses a combination of
                          color/ultrasonic sensors and motor encoders to fully
                          scan and solve a 3x3 Rubik&apos;s Cube.
                        </span>
                        <span>
                          Implemented into the code are interrupts, non-trivial
                          functions, timers, and of course the solving
                          algorithm.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>C++ |</li>
                        <li>Robot C |</li>
                        <li>Python |</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbFileExport />
                  </Link>
                  */}
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                          target="_blank"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0">
                    <Link
                      className="w-full group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] w-full grayscale hover:grayscale-0 blur-sm rounded-lg duration-300"
                          src={rubiksSolver}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/*Project 3*/}
            <section id="web">
              <div className="w-full flex flex-col gap-28 mt-10">
                <div className="relative h-[40vh]">
                  <div className="z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-20 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Mechanical Design
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        Melman - FRC Team 1325
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          A 125lb robot designed to compete in the 2023 FIRST
                          Robotics Competition (Charged Up).
                        </span>
                        <span>
                          Secured 1st place in 2 district championships, ranking
                          3rd in Canada, 23rd worldwide
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>Solidworks</li>
                        <li>3 DOF</li>
                        <li>Custom Gearboxes</li>
                        <li>Forward/Inverse Kinematics</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/13LPS8R5R6xdTd2GWJs-4m8bapAp-xgL6/view?usp=sharing"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  
                  */}
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view?usp=sharing"
                          target="_blank"
                        >
                          <TbFileExport />
                        </Link>
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                          target="_blank"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0">
                    <Link
                      className="w-full group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] w-full grayscale hover:grayscale-0 blur-sm rounded-lg duration-300"
                          src={melman}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>






{/*Medium Screens*/}
<div className="block xl:hidden">
{/* Project 1*/}
<section id="web">
  <div className="w-full flex flex-col  gap-28 mt-10">
    <div className="flex flex-col xl:flex-row gap-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Web Development
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          This Website!
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span>
            Created in the span of a week this website allows me to
            showcase my portfolio of technical skills and project
            experiences.
          </span>
          <span>
            It also illustrates my understanding of SEO
            optimization, with features like image lazy loading and
            server-side rendering.
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>Typescript |</li>
          <li>Nextjs |</li>
          <li>Tailwind |</li>
          <li>React</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://github.com/AnmeetS/webportfolio"
            target="_blank"
          >
            <TbBrandGithub />
          </Link>
          {/*
        <Link 
        className=" hover:text-textLighter duration-300"
        href="https://mailchimp.com/resources/404-page/"
        target="_blank"
        >
          <TbBrandYoutube />
        </Link>
        
        <Link 
        className=" hover:text-textLighter duration-300"
        href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
        target="_blank"
        >
          <TbFileExport  />
        </Link>
        <Link 
        className=" hover:text-textLighter duration-300"
        href="/underConstruction"
        >
          <RxOpenInNewWindow />
        </Link>
        */}
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto mdl:h-[50vh] object-contain rounded-lg  duration-300  xl:-ml-16"
            src={landing}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>

{/* Project 2*/}
<section id="soft">
  <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
    <div className="flex flex-col xl:flex-row-reverse gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-end items-center z-10 xl:mr-16 xl:text-right text-left"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Software Development
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          Rubik&apos;s Cube Solving Robot
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span></span>
          <span>
            Created over the span of 3 months for our course
            project, this robot uses a combination of
            color/ultrasonic sensors and motor encoders to fully
            scan and solve a 3x3 Rubik&apos;s Cube.
          </span>
          <span>
            Implemented into the code are interrupts, non-trivial
            functions, timers, and of course the solving algorithm.
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>C++ | </li>
          <li>Robot C | </li>
          <li>Python |</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
            target="_blank"
          >
            <TbBrandYoutube />
          </Link>
         
      <Link
        className=" hover:text-textLighter duration-300"
        href="/underconstruction"
        target="_blank"
      >
        <TbBrandGithub />
      </Link>
      <Link
        className=" hover:text-textLighter duration-300"
        href="/underconstruction"
        target="_blank"
      >
        <TbFileExport />
      </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="/underconstruction"
            target="_blank"
          >
            <RxOpenInNewWindow />
          </Link>
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto h-[50vh] object-contain rounded-lg duration-300 xl:ml-16"
            src={rubiksSolver}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>

{/*Project 3*/}
<section id="mech">
  <div className="w-full flex flex-col  gap-28 mt-10">
    <div className="flex flex-col xl:flex-row gap-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Mechanical Design
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          Melman - FRC Team 1325
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span>
            A 125lb robot designed to compete in the 2023 FIRST
            Robotics Competition (Charged Up).
          </span>
          <span>
            {" "}
            Secured <span className="text-textLighter">
              1st
            </span>{" "}
            place in 2 district championships, ranking{" "}
            <span className="text-textLighter">3rd</span> in Canada,{" "}
            <span className="text-textLighter">23rd</span> worldwide
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>Solidworks</li>
          <li>3 DOF</li>
          <li>Custom Gearboxes</li>
          <li>Forward/Inverse Kinematics</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://mailchimp.com/resources/404-page/"
            target="_blank"
          >
            <TbBrandYoutube />
          </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
            target="_blank"
          >
            <TbFileExport />
          </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="/underconstruction"
          >
            <RxOpenInNewWindow />
          </Link>
          {/*
        
        <Link
          className=" hover:text-textLighter duration-300"
          href="https://github.com/AnmeetS/webportfolio"
          target="_blank"
        >
          <TbBrandGithub />
        </Link>
        */}
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto mdl:h-[50vh] object-contain rounded-lg  duration-300  xl:-ml-16"
            src={melman}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>
</div>
*/}
import React from "react";

const temp = () =>{
    return(
        <div>
            Temp
        </div>
    )
}

export default temp

 {/*
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

          {/*Small Screens*/}
          <div className="flex flex-col gap-12 mdl:hidden">
            {/* Project 1*/}
            <section id="web">
              <div className="w-full flex flex-col gap-32 mt-10">
                <div className="relative h-[40vh]">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center"
                    >
                      <div className="z-20 p-2 w-full bg-border/50 flex flex-col gap-6 items-center backdrop-blur-sm rounded-lg">
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Web Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        This Website!
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          Created in the span of a week this website allows me
                          to showcase my portfolio of technical skills and
                          project experiences.
                        </span>
                        <span>
                          It also illustrates my understanding of SEO
                          optimization, with features like image lazy loading
                          and server-side rendering.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>Typescript |</li>
                        <li>Nextjs |</li>
                        <li>Tailwind |</li>
                        <li>React</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://github.com/AnmeetS/webportfolio"
                          target="_blank"
                        >
                          <TbBrandGithub />
                        </Link>
                        {/*
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://mailchimp.com/resources/404-page/"
                    target="_blank"
                    >
                      <TbBrandYoutube />
                    </Link>
                    
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
                    target="_blank"
                    >
                      <TbFileExport  />
                    </Link>
                    <Link 
                    className=" hover:text-textLighter duration-300"
                    href="/underConstruction"
                    >
                      <RxOpenInNewWindow />
                    </Link>
                    */}
                      </div>

                      </div>
                      
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex">
                    <Link
                      className="object-cover group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] grayscale hover:grayscale-0 rounded-lg duration-300"
                          src={landing}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Project 2*/}
            <section id="web">
              <div className="w-full flex flex-col gap-28 mt-10">
                <div className="relative h-[40vh]">
                  <div className="z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-20 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Software Development
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        Rubik&apos; Cube Solving Robot
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          Created over the span of 3 months for our course
                          project, this robot uses a combination of
                          color/ultrasonic sensors and motor encoders to fully
                          scan and solve a 3x3 Rubik&apos;s Cube.
                        </span>
                        <span>
                          Implemented into the code are interrupts, non-trivial
                          functions, timers, and of course the solving
                          algorithm.
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>C++ |</li>
                        <li>Robot C |</li>
                        <li>Python |</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbFileExport />
                  </Link>
                  */}
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                          target="_blank"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0">
                    <Link
                      className="w-full group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] w-full grayscale hover:grayscale-0 blur-sm rounded-lg duration-300"
                          src={rubiksSolver}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/*Project 3*/}
            <section id="web">
              <div className="w-full flex flex-col gap-28 mt-10">
                <div className="relative h-[40vh]">
                  <div className="z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-20 xl:ml-16"
                    >
                      <p className="font-monoFont text-textLighter text-sm tracking-wide z-20 -mb-4">
                        Mechanical Design
                      </p>
                      <h3 className="text-3xl font-bold font-titleFont z-20">
                        Melman - FRC Team 1325
                      </h3>
                      <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow z-20">
                        <span>
                          A 125lb robot designed to compete in the 2023 FIRST
                          Robotics Competition (Charged Up).
                        </span>
                        <span>
                          Secured 1st place in 2 district championships, ranking
                          3rd in Canada, 23rd worldwide
                        </span>
                      </p>
                      <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest z-20">
                        <li>Solidworks</li>
                        <li>3 DOF</li>
                        <li>Custom Gearboxes</li>
                        <li>Forward/Inverse Kinematics</li>
                      </ul>
                      <div className="text-2xl gap-4 flex z-20">
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/13LPS8R5R6xdTd2GWJs-4m8bapAp-xgL6/view?usp=sharing"
                          target="_blank"
                        >
                          <TbBrandYoutube />
                        </Link>
                        {/*
                  <Link
                    className=" hover:text-textLighter duration-300"
                    href="/underconstruction"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </Link>
                  
                  */}
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view?usp=sharing"
                          target="_blank"
                        >
                          <TbFileExport />
                        </Link>
                        <Link
                          className=" hover:text-textLighter duration-300"
                          href="/underconstruction"
                          target="_blank"
                        >
                          <RxOpenInNewWindow />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0">
                    <Link
                      className="w-full group items-center justify-center z-0 "
                      href="/"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          className="h-[40vh] w-full grayscale hover:grayscale-0 blur-sm rounded-lg duration-300"
                          src={melman}
                          alt="projectImg"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>






{/*Medium Screens*/}
<div className="block xl:hidden">
{/* Project 1*/}
<section id="web">
  <div className="w-full flex flex-col  gap-28 mt-10">
    <div className="flex flex-col xl:flex-row gap-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Web Development
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          This Website!
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span>
            Created in the span of a week this website allows me to
            showcase my portfolio of technical skills and project
            experiences.
          </span>
          <span>
            It also illustrates my understanding of SEO
            optimization, with features like image lazy loading and
            server-side rendering.
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>Typescript |</li>
          <li>Nextjs |</li>
          <li>Tailwind |</li>
          <li>React</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://github.com/AnmeetS/webportfolio"
            target="_blank"
          >
            <TbBrandGithub />
          </Link>
          {/*
        <Link 
        className=" hover:text-textLighter duration-300"
        href="https://mailchimp.com/resources/404-page/"
        target="_blank"
        >
          <TbBrandYoutube />
        </Link>
        
        <Link 
        className=" hover:text-textLighter duration-300"
        href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
        target="_blank"
        >
          <TbFileExport  />
        </Link>
        <Link 
        className=" hover:text-textLighter duration-300"
        href="/underConstruction"
        >
          <RxOpenInNewWindow />
        </Link>
        */}
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto mdl:h-[50vh] object-contain rounded-lg  duration-300  xl:-ml-16"
            src={landing}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>

{/* Project 2*/}
<section id="soft">
  <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
    <div className="flex flex-col xl:flex-row-reverse gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-end items-center z-10 xl:mr-16 xl:text-right text-left"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Software Development
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          Rubik&apos;s Cube Solving Robot
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span></span>
          <span>
            Created over the span of 3 months for our course
            project, this robot uses a combination of
            color/ultrasonic sensors and motor encoders to fully
            scan and solve a 3x3 Rubik&apos;s Cube.
          </span>
          <span>
            Implemented into the code are interrupts, non-trivial
            functions, timers, and of course the solving algorithm.
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>C++ | </li>
          <li>Robot C | </li>
          <li>Python |</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
            target="_blank"
          >
            <TbBrandYoutube />
          </Link>
         
      <Link
        className=" hover:text-textLighter duration-300"
        href="/underconstruction"
        target="_blank"
      >
        <TbBrandGithub />
      </Link>
      <Link
        className=" hover:text-textLighter duration-300"
        href="/underconstruction"
        target="_blank"
      >
        <TbFileExport />
      </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="/underconstruction"
            target="_blank"
          >
            <RxOpenInNewWindow />
          </Link>
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto h-[50vh] object-contain rounded-lg duration-300 xl:ml-16"
            src={rubiksSolver}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>

{/*Project 3*/}
<section id="mech">
  <div className="w-full flex flex-col  gap-28 mt-10">
    <div className="flex flex-col xl:flex-row gap-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full xl:w-1/2 flex flex-col gap-6 xl:items-start items-center z-10 xl:ml-16"
      >
        <p className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
          Mechanical Design
        </p>
        <h3 className="text-3xl font-bold font-titleFont">
          Melman - FRC Team 1325
        </h3>
        <p className="bg-foreground text-sm md:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
          <span>
            A 125lb robot designed to compete in the 2023 FIRST
            Robotics Competition (Charged Up).
          </span>
          <span>
            {" "}
            Secured <span className="text-textLighter">
              1st
            </span>{" "}
            place in 2 district championships, ranking{" "}
            <span className="text-textLighter">3rd</span> in Canada,{" "}
            <span className="text-textLighter">23rd</span> worldwide
          </span>
        </p>
        <ul className="text-xs md:text-sm font-mono tracking-wide flex gap-2 md:gap-5 justify-between text-copyLightest">
          <li>Solidworks</li>
          <li>3 DOF</li>
          <li>Custom Gearboxes</li>
          <li>Forward/Inverse Kinematics</li>
        </ul>
        <div className="text-2xl gap-4 flex">
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://mailchimp.com/resources/404-page/"
            target="_blank"
          >
            <TbBrandYoutube />
          </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
            target="_blank"
          >
            <TbFileExport />
          </Link>
          <Link
            className=" hover:text-textLighter duration-300"
            href="/underconstruction"
          >
            <RxOpenInNewWindow />
          </Link>
          {/*
        
        <Link
          className=" hover:text-textLighter duration-300"
          href="https://github.com/AnmeetS/webportfolio"
          target="_blank"
        >
          <TbBrandGithub />
        </Link>
        */}
        </div>
      </motion.div>
      <Link
        className="w-auto xl:w-1/2 relative group items-center justify-center flex xl:block"
        href="/"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            className="grayscale hover:grayscale-0 w-auto mdl:h-[50vh] object-contain rounded-lg  duration-300  xl:-ml-16"
            src={melman}
            alt="projectImg"
          />
        </motion.div>
      </Link>
    </div>
  </div>
</section>
</div>
*/}