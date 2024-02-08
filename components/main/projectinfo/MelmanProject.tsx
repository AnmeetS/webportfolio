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
            href: "https://drive.google.com/file/d/13LPS8R5R6xdTd2GWJs-4m8bapAp-xgL6/view?usp=sharing",
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
