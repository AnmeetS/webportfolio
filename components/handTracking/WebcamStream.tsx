// WebcamStream.tsx
import React, { useEffect, useRef, useState } from "react";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "./HandConnections";
import { loadHandLandmarker, predictLandmarks } from "./LandmarkDetection";
import { HandLandmarker } from "@mediapipe/tasks-vision";

const WebcamStreamWithLandmarks: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [handLandmarker, setHandLandmarker] = useState<HandLandmarker | null>(null);

  const [webcamRunning, setWebcamRunning] = useState(false);

  useEffect(() => {
    loadHandLandmarker().then(landmarker => setHandLandmarker(landmarker));
  }, []);
  const enableCam = async () => {
    if (!handLandmarker || !navigator.mediaDevices?.getUserMedia) {
      console.warn("getUserMedia() is not supported by your browser or handLandmarker is not loaded");
      return;
    }

    if (!webcamRunning) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setWebcamRunning(true);
      }
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setWebcamRunning(false);
      }
    }
  };

  useEffect(() => {
    const predictWebcam = () => {
      if (!handLandmarker || !webcamRunning || !videoRef.current || !canvasRef.current) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const draw = async () => {
        if (!webcamRunning || video.videoWidth === 0 || video.videoHeight === 0) {
          requestAnimationFrame(draw);
          return;
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const results = await predictLandmarks(handLandmarker, video);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (results && results.landmarks) {
          drawConnectors(ctx, results.landmarks[0], HAND_CONNECTIONS, { color: "#171122", lineWidth: 4 });
          drawLandmarks(ctx, results.landmarks[0], { color: "#9b69f1", lineWidth: 0 });
        }

        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    };

    predictWebcam();
  }, [webcamRunning, handLandmarker]);

  return (
    <div className="border-2 bg-foreground border-border w-fit justify-center flex flex-col">
      <div className="relative w-[480px] h-[360px] pointer-events-none bg-foreground border-2 border-border">
        <video ref={videoRef} autoPlay muted playsInline className="w-full h-full"/>
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"/>
      </div>
      <button onClick={enableCam} className="p-2 text-textLight font-monoFont bg-foreground border-2 border-textLighter rounded z-20">
        {webcamRunning ? <span>Disable Hand Tracking</span> : <span>Enable Hand Tracking</span>}
      </button>
    </div>
  );
};

export default WebcamStreamWithLandmarks;
