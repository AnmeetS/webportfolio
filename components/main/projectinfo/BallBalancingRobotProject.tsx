import ProjectItem from "./ProjectItem";
import { BallBalancingScreenshot, placeholder } from "@/public/assets";

const BallBalancingRobotProject = () => {
  return (
    <div>
      <ProjectItem
        type="Software Development"
        title="BB Bot - Ball Balancing Platform"
        info="A ball balancing robot created as a self-educational project to explore
         robotics concepts such as PID algorithms and inverse kinematics. 
         This custom 3-RRS parallel manipulator, built with an Arduino, 
         uses a 4-wire resistive touchpad for positioning information and a PID control 
         algorithm for ball balancing. Inverse kinematics were calculated and implemented 
         to coordinate platform tilt with stepper motor angles."
        listItem={[" C++ |", "Arduino |", "Solidworks"]}
        imageSrc={BallBalancingScreenshot}
        imageHref="https://github.com/AnmeetS/Ball-Balancer"
        iconLinks={[
          { icon: "github", href: "https://github.com/AnmeetS/Ball-Balancer" },
          { icon: "youtube", href: "https://" },
        ]}
      />
    </div>
  );
};
export default BallBalancingRobotProject;
