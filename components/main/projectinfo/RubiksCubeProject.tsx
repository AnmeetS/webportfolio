import ProjectItem from "./ProjectItem";
import { rubiksSolver } from "@/public/assets";

const RubiksCubeProject = () => {
  return (
    <div>
    <ProjectItem
      type="Software Development"
      title="Rubik&apos;s Cube Solving Robot"
      info="A lego robot created by a group of 4 as a course culminating project.
      Utilized a combination of sensors and motor encoders, as well as non-trivial
      functions, timers, and a solving algorithm to scan, manipulate and solve a 3x3 Rubik&apos;s Cube autonomously."
      listItem={["C++ |", "Robot C |", "Python"]}
      imageSrc={rubiksSolver}
      imageHref="https://https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing"
      iconLinks={[ { icon: 'youtube', href: 'https://https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing' }, { icon: 'openNewWindow', href: '/underconstruction' },]}
    />
  </div>
  )
}
export default RubiksCubeProject