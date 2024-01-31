import ProjectItem from "./ProjectItem";
import { rubiksSolver } from "@/public/assets";

const RubiksCubeProject = () => {
  return (
    <div>
    <ProjectItem
      type="Software Development"
      title="Rubik&apos;s Cube Solving Robot"
      info="Created over the span of 3 months for our course
      project, this robot uses a combination of
      color/ultrasonic sensors and motor encoders to fully
      scan and solve a 3x3 Rubik&apos;s Cube.
      Implemented into the code are interrupts, non-trivial
      functions, timers, and of course the solving
      algorithm."
      listItem={["C++ |", "Robot C |", "Python"]}
      imageSrc={rubiksSolver}
      imageHref="https://"
      iconLinks={[ { icon: 'youtube', href: 'https://https://drive.google.com/file/d/1aWYzpqJ5ZphrVBlnGU5uONs3m6xx0Rhn/view?usp=sharing' }, { icon: 'openNewWindow', href: '/underconstruction' },]}
    />
  </div>
  )
}
export default RubiksCubeProject