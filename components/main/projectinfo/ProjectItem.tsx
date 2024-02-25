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
  imageSrc: StaticImageData;
  imageHref: string;
  iconLinks: IconLink[];
  buttonText?: string;
  buttonHref?: string;
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
  buttonText,
  buttonHref,
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
          <span className="font-monoFont text-textLighter text-sm tracking-wide -mb-4 bg-background/50 p-1 rounded-md">
            {type}
          </span>
          <span className="text-3xl font-bold font-titleFont">{title}</span>
          <span className="bg-foreground text-sm sml:text-base p-2 md:p-6 rounded-md flex flex-col shadow-navbarShadow backdrop-blur-lg">
            {info}
          </span>
          <ul className="text-xs sml:text-sm font-mono tracking-wide flex gap-2 justify-between text-copyLighter rounded-lg bg-foreground/50 mdl:bg-background/75 p-2">
            {listItem.map((item, index) => (
              <li className="flex gap-2 text-copyLight" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className="text-2xl gap-4 flex rounded-full p-3 bg-foreground/50 mdl:bg-transparent">
            <div className=" items-center justify-center flex gap-4 ">
              {iconLinks.map(({ icon, href }, index) => {
                const IconComponent = iconComponents[icon];
                return (
                  <Link
                    key={index}
                    className="hover:text-textLighter duration-300 "
                    href={href}
                  >
                    <IconComponent />
                  </Link>
                );
              })}
            </div>

            {buttonText && buttonHref && (
              <Link href={buttonHref}>
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-auto h-auto text-sm font-monoFont border-2 border-textLighter rounded-md text-textLighter tracking-wide bg-foreground hover:bg-border duration-300 p-4"
                >
                  {buttonText}
                </motion.button>
              </Link>
            )}
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
