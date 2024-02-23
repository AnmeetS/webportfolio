import React, { useRef } from "react";
import WebcamStream from "./WebcamStream";
import HandTrackedModel from "../3D/HandTrackedModel";

interface HandTrackedModelRef {
  updateModel: (
    newMinAzimuthAngle: number,
    newMaxAzimuthAngle: number,
    newMaxPolarAngle: number,
    newMinPolarAngle: number
  ) => void;
}

const HandtrackingTrial: React.FC = () => {
  const HandTrackedModelRef = useRef<HandTrackedModelRef>(null);

  const handleProcessedData = (data: any) => {
    if (data.handVisible) {
      const azimuthRange = Math.PI;
      const value = data.eighthLandmark.x - 0.5;
      const azimuthAngle = value * 2 * azimuthRange;
      const polarAngle = data.eighthLandmark.y * Math.PI;
      if (HandTrackedModelRef.current) {
        HandTrackedModelRef.current.updateModel(
          azimuthAngle,
          azimuthAngle,
          polarAngle,
          polarAngle
        );
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-fit h-full">
        <div className="py-10">
          <WebcamStream processedData={handleProcessedData} />
        </div>
      </div>

      <HandTrackedModel ref={HandTrackedModelRef} />
    </div>
  );
};

export default HandtrackingTrial;