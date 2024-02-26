import React, { useRef, useEffect } from "react";
import { useHandLandmarkDetection } from "./LandmarkDetection";

interface WebcamStreamProps {
  processedData: (data: any) => void;
}

const WebcamStream: React.FC<WebcamStreamProps> = ({ processedData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { webcamRunning, enableCam, predictWebcam } = useHandLandmarkDetection(
    videoRef,
    canvasRef,
    processedData
  );

  useEffect(() => {
    predictWebcam();
  }, [webcamRunning, predictWebcam]);

  return (
    <div className="w-full">
      <div className=" border-2 border-border rounded-sm w-[33vw] xl:w-[25vw] aspect-[4/3] justify-center flex flex-col shadow-navbarShadow">
        <div className="relative w-full aspect-[4/3]  pointer-events-none bg-foreground border-2 border-border z-50">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <button
          onClick={enableCam}
          className="w-auto h-auto hover:bg-border duration-300 p-4 text-textLight font-monoFont bg-foreground border-2 border-textLighter rounded z-20"
        >
          {webcamRunning ? "Disable Hand Tracking" : "Enable Hand Tracking"}
        </button>
      </div>
    </div>
  );
};

export default WebcamStream;
