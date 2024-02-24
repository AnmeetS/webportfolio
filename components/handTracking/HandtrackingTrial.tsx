import React, { useRef, useState } from "react";
import WebcamStream from "./WebcamStream";
import HandTrackedModel from "./HandTrackedModel";

interface HandTrackedModelRef {
  updateModel: (
    newMinAzimuthAngle: number,
    newMaxAzimuthAngle: number,
    newMaxPolarAngle: number,
    newMinPolarAngle: number
  ) => void;
  updatePosition: (x: number, y: number) => void; // Add this line
}

const HandtrackingTrial: React.FC = () => {
  const HandTrackedModelRef = useRef<HandTrackedModelRef>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const startPositionRef = useRef({ x: 0, y: 0 });
  const inPanModeRef = useRef(false);

  const handleProcessedData = (data: any) => {
    if (data.handVisible) {
      const fingersUpStatus = data.fingersUpStatus;
      if (fingersUpStatus) {
        if (fingersUpStatus[1] === 1 && fingersUpStatus[2] === 1) {
          console.log("Nothing Mode");
          inPanModeRef.current = false;
        } else if (fingersUpStatus[1] === 0 && fingersUpStatus[2] === 0) {
          if (!inPanModeRef.current) {
            // Entering Pan Mode, set starting position
            startPositionRef.current = {
              x: data.indexFinger.x,
              y: data.indexFinger.y,
            };
            inPanModeRef.current = true;
          } else {
            // Update position based on the difference from the starting position
            const deltaX = -(
              (data.indexFinger.x - startPositionRef.current.x) *
              window.innerWidth
            );
            const deltaY =
              (data.indexFinger.y - startPositionRef.current.y) *
              window.innerHeight;
            positionRef.current = {
              x: positionRef.current.x + deltaX,
              y: positionRef.current.y + deltaY,
            };
            // Reset start position for smooth continuous movement
            startPositionRef.current = {
              x: data.indexFinger.x,
              y: data.indexFinger.y,
            };
            HandTrackedModelRef.current?.updatePosition(
              positionRef.current.x,
              positionRef.current.y
            );
          }
        } else if (fingersUpStatus[1] === 1) {
          console.log("Rotate Mode");
          inPanModeRef.current = false;
          const azimuthRange = Math.PI;
          const value = data.indexFinger.x - 0.5;
          const azimuthAngle = value * 0.75 * azimuthRange;
          const polarAngle = data.indexFinger.y * Math.PI;
          if (HandTrackedModelRef.current) {
            HandTrackedModelRef.current.updateModel(
              azimuthAngle,
              azimuthAngle,
              polarAngle,
              polarAngle
            );
          }
        }
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
