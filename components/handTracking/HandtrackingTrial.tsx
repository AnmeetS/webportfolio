import React, { useRef } from "react";
import WebcamStream from "./WebcamStream";
import HandTrackedModel from "./HandTrackedModel";

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
      const azimuthAngle = value * 0.75 * azimuthRange;
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
    <div className="relative w-full h-screen">
      <div className="absolute w-fit h-full">
        <div className="py-10 px-10">
          <WebcamStream processedData={handleProcessedData} />
        </div>
      </div>
      <HandTrackedModel ref={HandTrackedModelRef} />
    </div>
  );
};

export default HandtrackingTrial;
