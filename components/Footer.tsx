import { TbBrandGithub } from "react-icons/tb";
import { 
    SlSocialLinkedin, 
    SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/AnmeetS" target="_blank">
        <span className="w-10 h-10 text-xl bg-foreground border-[1px] border-copyLighter hover:border-textLighter text-copyLighter rounded-full inline-flex items-center justify-center hover:text-textLighter cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/anmeets/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-foreground border-[1px] border-copyLighter hover:border-textLighter text-copyLighter rounded-full inline-flex items-center justify-center hover:text-textLighter cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://www.instagram.com/anmeetloaf/" target="_blank">
        <span className="w-10 h-10 text-xl bg-foreground border-[1px] border-copyLighter hover:border-textLighter text-copyLighter rounded-full inline-flex items-center justify-center hover:text-textLighter cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialInstagram />
        </span>
      </a>
    </div>
  );
};

export default Footer;