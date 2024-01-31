import ProjectItem from "./ProjectItem";
import { placeholder } from "@/public/assets";

const HandyMouseProject = () => {
  return (
    <div>
      <ProjectItem
        type="Lorem Ipsum"
        title="Lorem Ipsum!"
        info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Libero aspernatur maiores possimus optio cumque fugit vitae molestias repellat voluptatibus aut error a ea nisi ut iusto vero facere 
        assumenda dolores velit deserunt, similique asperiores quas suscipit? Nobis voluptate perferendis exercitationem. 
        Fugit explicabo quos quam in animi architecto officia corporis fugiat?"
        listItem={["Lorem |", "Lorem |", "Lorem"]}
        imageSrc={placeholder}
        imageHref="https://"
        iconLinks={[
            { icon: 'github', href: 'https://' }, { icon: 'youtube', href: 'https://' }, { icon: 'fileExport', href: 'https://' }, { icon: 'openNewWindow', href: 'https://' },]}
      />
    </div>
  )
}
export default HandyMouseProject