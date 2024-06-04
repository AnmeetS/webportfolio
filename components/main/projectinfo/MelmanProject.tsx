import ProjectItem from "./ProjectItem";
import { melman } from "@/public/assets";

const MelmanProject = () => {
  return (
    <div>
      <ProjectItem
        type="Mechanical Design"
        title=" Melman - FRC Team 1325"
        info="A 125lb robot I designed to compete in the 2023 FIRST Robotics Competition (Charged Up).
        Secured 1st place in 2 district championships, ranking 3rd in Canada, 23rd worldwide"
        listItem={[
          "Solidworks |",
          "3 DOF |",
          "Custom Gearboxes |",
          "Forward/Inverse Kinematics",
        ]}
        imageSrc={melman}
        imageHref="https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view"
        iconLinks={[
          {
            icon: "youtube",
            href: "/assets/videos/FRC%202023.mp4",
          },
          {
            icon: "fileExport",
            href: "https://drive.google.com/file/d/1EDHvFZCRwybWJhzmJxXc267sPATQh5B8/view",
          },
          { icon: "openNewWindow", href: "/underconstruction" },
        ]}
      />
    </div>
  );
};
export default MelmanProject;
