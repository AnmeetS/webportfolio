import React, { useRef, useEffect } from 'react';
import { useHandLandmarkDetection } from './LandmarkDetection';

interface WebcamStreamProps {
  processedData: (data: any) => void;
}

const WebcamStream: React.FC<WebcamStreamProps> = ({ processedData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { webcamRunning, enableCam, predictWebcam } = useHandLandmarkDetection(videoRef, canvasRef, processedData);

  useEffect(() => {
    predictWebcam();
  }, [webcamRunning, predictWebcam]);

  return (
    <div className="border-2 bg-foreground border-border w-fit justify-center flex flex-col">
      <div className="relative w-[480px] h-[360px] pointer-events-none bg-foreground border-2 border-border">
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
        className="p-2 text-textLight font-monoFont bg-foreground border-2 border-textLighter rounded z-20"
      >
        {webcamRunning ? "Disable Hand Tracking" : "Enable Hand Tracking"}
      </button>
    </div>
  );
};

export default WebcamStream;
