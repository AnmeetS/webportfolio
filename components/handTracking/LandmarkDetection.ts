import { useState, useCallback, useEffect } from "react";
import { loadHandLandmarker, predictLandmarks } from "./LandmarkDetectionSetup";
import { HandLandmarker } from "@mediapipe/tasks-vision";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "./HandConnections";
import {
  logProcessedLandmarkData,
  processHandLandmarks,
  HandData,
} from "./HandProcessing";

export const useHandLandmarkDetection = (
  videoRef: React.RefObject<HTMLVideoElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  ProcessedData: (data: HandData) => void
) => {
  const [handLandmarker, setHandLandmarker] = useState<HandLandmarker | null>(
    null
  );
  const [webcamRunning, setWebcamRunning] = useState(false);

  const enableCam = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      console.warn("getUserMedia() is not supported by your browser");
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

  const predictWebcam = useCallback(() => {
    const draw = async () => {
      if (
        !handLandmarker ||
        !webcamRunning ||
        !videoRef.current ||
        !canvasRef.current ||
        videoRef.current.videoWidth === 0 ||
        videoRef.current.videoHeight === 0
      ) {
        requestAnimationFrame(draw);
        return;
      }

      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const results = await predictLandmarks(handLandmarker, video);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (results && results.landmarks) {
        const processedData = processHandLandmarks(results.landmarks[0]);
        ProcessedData(processedData);
        drawConnectors(ctx, results.landmarks[0], HAND_CONNECTIONS, {
          color: "#171122",
          lineWidth: 4,
        });
        drawLandmarks(ctx, results.landmarks[0], {
          color: "#9b69f1",
          lineWidth: 0,
        });
      }

      requestAnimationFrame(draw);
    };

    draw();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRunning, handLandmarker, ProcessedData]);

  useEffect(() => {
    loadHandLandmarker().then((landmarker) => setHandLandmarker(landmarker));
  }, []);

  return {handLandmarker, webcamRunning, enableCam, predictWebcam };
};
