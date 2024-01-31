import Image from "next/image";
import { TbBrandGithub, TbBrandYoutube, TbFileExport } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface IconLink {
  icon: "github" | "youtube" | "fileExport" | "openNewWindow";
  href: string;
}

interface Props {
  type: string;
  title: string;
  info: string;
  listItem: string[];
  imageSrc: StaticImageData; // Import StaticImageData from 'next/image'
  imageHref: string;
  iconLinks: IconLink[];
}

const iconComponents = {
  github: TbBrandGithub,
  youtube: TbBrandYoutube,
  fileExport: TbFileExport,
  openNewWindow: RxOpenInNewWindow,
};

const ProjectItem = ({
  type,
  title,
  info,
  listItem,
  imageSrc,
  imageHref,
  iconLinks,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 ">
      <div className="flex flex-col mdl:flex-row relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mdl:w-1/2 flex flex-col gap-6 mdl:items-start items-center z-10 mdl:ml-16 bg-background/20 mdl:bg-transparent backdrop-blur-sm mdl:backdrop-blur-0 p-4 rounded-xl"
        >
          <span className="font-monoFont text-textLighter text-sm tracking-wide -mb-4">
            {type}
          </span>
          <span className="text-3xl font-bold font-titleFont">{title}</span>
          <span className="bg-foreground/50 text-sm sml:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow">
            {info}
          </span>
          <ul className="text-xs sml:text-sm font-mono tracking-wide flex gap-2 justify-between text-copyLighter rounded-lg bg-foreground/50 mdl:bg-background/75 p-2">
            {listItem.map((item, index) => (
              <li className="flex gap-2 text-copyLight" key={index}>
               {item}
              </li>
            ))}
          </ul>
          <div className="text-2xl gap-4 flex rounded-full p-2 bg-foreground/50 mdl:bg-transparent">
            
            {iconLinks.map(({ icon, href }, index) => {
              const IconComponent = iconComponents[icon];
              return (
                <Link
                  key={index}
                  className="hover:text-textLighter duration-300"
                  href={href}
                  target="_blank"
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>
        </motion.div>
        <Link
          className="hidden group items-center justify-center mdl:block w-1/2"
          href={imageHref}
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full flex"
          >
            <Image
              className="grayscale hover:grayscale-0 rounded-2xl duration-300 -ml-16 object-cover"
              src={imageSrc}
              alt="projectImg"
            />
          </motion.div>
        </Link>
        <Link href={imageHref} target="_blank">
          <div className="absolute mdl:hidden inset-0 justify-center flex">
            <Image
              className="grayscale hover:grayscale-0 rounded-lg duration-300 object-cover"
              src={imageSrc}
              alt="projectImg"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;
