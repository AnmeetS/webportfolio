import ProjectItem from "./ProjectItem";
import { landing } from "@/public/assets";

const WebsiteProject = () => {
  return (
    <div>
      <ProjectItem
        type="Web Development"
        title="This Website!"
        info="Created in the span of a week this website allows me to showcase my portfolio of technical skills and project experiences.
            It also illustrates my understanding of SEO optimization, with features like image lazy loading and server-side rendering."
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
