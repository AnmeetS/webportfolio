import {FaRegFolder} from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props{
    title:string;
    des:string;
    listItem:string[];
    githubRedirect:string;
    genRedirect:string;
}
const ProjectCard = ({title, des,listItem,githubRedirect,genRedirect}: Props) => {
  return (
    <div className="w-full h-80 rounded-lg bg-foreground hover:bg-border p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
            <FaRegFolder className="text-4xl text-textLighter"/>
            <div className="flex justify-between items-center gap-2">
                <a href={githubRedirect} target="_blank">  
                    <TbBrandGithub className="text-2xl hover:text-textLighter"/>
                </a>
                <a href={genRedirect} target="_blank">
                    <RxOpenInNewWindow className="text-2xl hover:text-textLighter"/>
                </a>
            </div>
        </div>
        <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textLighter">
                {title}
            </h2>
            <p className="text-sm mt-3">
                {des}
            </p>
        </div>
        <ul className="text-xs mdl:text-sm text-copyLightest flex items-center gap-2 justify-between flex-wrap">
            {
                listItem.map((item,index) => (
                    <li key={index}>{item}</li>
                ) )
            }
        </ul>
    </div>
  )
}
export default ProjectCard