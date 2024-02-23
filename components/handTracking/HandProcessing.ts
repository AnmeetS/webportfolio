type Landmark = { x: number; y: number; z: number };

export type HandData = {
  handVisible: boolean;
  eighthLandmark?: Landmark;
};

export const logProcessedLandmarkData = (landmarks: any) => {
  if (!landmarks || landmarks.length === 0) {
    console.log("No hand detected.");
  } else {
    const eighthLandmark = landmarks[8];
    if (eighthLandmark) {
      console.log("Hand Detected");
      console.log(
        `8th Finger - X: ${eighthLandmark.x}, Y: ${eighthLandmark.y}, Z: ${eighthLandmark.z}`
      );

      console.log("Processed and received landmarks in Logger.ts:", landmarks);
    } else {
      console.log("No hand detected.");
    }
  }
};

export const processHandLandmarks = (
  landmarks: Landmark[] | undefined
): HandData => {
  if (!landmarks || landmarks.length === 0) {
    return { handVisible: false };
  } else {
    const eighthLandmark = landmarks[8];
    if (eighthLandmark) {
      return {
        handVisible: true,
        eighthLandmark: eighthLandmark
          ? { x: eighthLandmark.x, y: eighthLandmark.y, z: eighthLandmark.z }
          : undefined,
      };
    } else {
      return { handVisible: false };
    }
  }
};
