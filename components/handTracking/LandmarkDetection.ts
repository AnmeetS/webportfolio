// LandmarkDetection.ts
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export const loadHandLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  const landmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numHands: 1,
  });
  return landmarker;
};

export const predictLandmarks = async (handLandmarker: HandLandmarker, videoElement: HTMLVideoElement) => {
    const results = await handLandmarker.detectForVideo(videoElement, performance.now());
    return results;
};
