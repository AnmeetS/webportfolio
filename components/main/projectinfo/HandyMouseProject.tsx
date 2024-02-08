import ProjectItem from "./ProjectItem";
import { placeholder } from "@/public/assets";
import { HANDyMouse } from "@/public/assets";

const HandyMouseProject = () => {
  return (
    <div>
      <ProjectItem
        type="Software Development"
        title="HANDy Mouse"
        info="A program developed to allow the user to manipulate their computer's cursor using motion tracking from webcam input."
        listItem={["Python |", "OpenCV |", "MediaPipe |", "AutoPy"]}
        imageSrc={HANDyMouse}
        imageHref="https://github.com/AnmeetS/HANDymouse"
        iconLinks={[
            { icon: 'github', href: 'https://github.com/AnmeetS/HANDymouse' },]}
      />
    </div>
  )
}
export default HandyMouseProject