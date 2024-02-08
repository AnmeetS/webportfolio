import ProjectItem from "./ProjectItem";
import { landing } from "@/public/assets";

const WebsiteProject = () => {
  return (
    <div>
      <ProjectItem
        type="Web Development"
        title="This Website!"
        info=" A website developed to showcase my technical skills, work experience and projects in an aesthetic and easily readable way.
        Utilized common SEO optimization practices such as image lazy loading and server-side rendering."
        listItem={["Typescript |", "Nextjs |", "Tailwind"]}
        imageSrc={landing}
        imageHref="https://github.com/AnmeetS/webportfolio"
        iconLinks={[
            { icon: 'github', href: 'https://github.com/AnmeetS/webportfolio' },]}
      />
    </div>
  );
};
export default WebsiteProject;
