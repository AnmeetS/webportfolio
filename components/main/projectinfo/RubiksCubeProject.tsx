import ProjectItem from "./ProjectItem";
import { rubiksSolver } from "@/public/assets";

const RubiksCubeProject = () => {
  return (
    <div>
    <ProjectItem
      type="Software Development"
      title="QBot - Rubik's Cube Solver"
      info="A lego robot created by a group of 4 as a course culminating project.
      Utilized a combination of sensors and motor encoders, as well as non-trivial
      functions, timers, and a solving algorithm to scan, manipulate and solve a 3x3 Rubik&apos;s Cube autonomously."
      listItem={["C++ |", "Robot C |", "Python"]}
      imageSrc={rubiksSolver}
      imageHref="/assets/videos/Rubik's%20Cube%20Solver.mp4"
      iconLinks={[ { icon: 'youtube', href: 'https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing' }, { icon: 'openNewWindow', href: '/underconstruction' },]}
    />
  </div>
  )
}
export default RubiksCubeProject;