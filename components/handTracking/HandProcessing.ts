type Landmark = { x: number; y: number; z: number };

export type HandData = {
  handVisible: boolean;
  indexFinger?: Landmark;
  distance?: number;
  fingersUpStatus?: number[];
};

const isHandVisible = (landmarks: Landmark[] | undefined): boolean => {
  if (!landmarks || landmarks.length === 0) {
    return false;
  } else {
    const indexFinger = landmarks[8];
    if (indexFinger) {
      return true;
    } else {
      return false;
    }
  }
};

const getIndexFingerLandmark = (
  landmarks: Landmark[] | undefined
): Landmark | undefined => {
  if (!landmarks || landmarks.length === 0) {
    return undefined;
  } else {
    const indexFinger = landmarks[8];
    // Directly return the landmark if it exists
    if (indexFinger) {
      return { x: indexFinger.x, y: indexFinger.y, z: indexFinger.z };
    } else {
      return undefined;
    }
  }
};

const getDistanceBetweenLandmarks = (landmark1: Landmark, landmark2: Landmark): number => {
  const deltaX = landmark2.x - landmark1.x;
  const deltaY = landmark2.y - landmark1.y;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};

const getFingersUpStatus = (landmarks: Landmark[], handType: 'Right' | 'Left'): number[] => {
  const fingerTips = [4, 8, 12, 16, 20];
  let fingers = [];

  if (landmarks.length > 0) {
    // Thumb
    if (handType === "Right") {
      fingers.push(landmarks[fingerTips[0]].x > landmarks[fingerTips[0] - 1].x ? 1 : 0);
    } else {
      fingers.push(landmarks[fingerTips[0]].x < landmarks[fingerTips[0] - 1].x ? 1 : 0);
    }

    // Index, Middle, Ring, and Pinky Fingers
    for (let id = 1; id < 5; id++) {
      fingers.push(landmarks[fingerTips[id]].y < landmarks[fingerTips[id] - 2].y ? 1 : 0);
    }
  }

  return fingers;
};


export const processHandLandmarks = (
  landmarks: Landmark[] | undefined, handType: 'Right' | 'Left' = 'Right'
): HandData => {
  const handVisible = isHandVisible(landmarks);
  const indexFinger = getIndexFingerLandmark(landmarks);
  let distance, fingersUpStatus;

  if (landmarks && landmarks.length > 8) {
    distance = getDistanceBetweenLandmarks(landmarks[4], landmarks[8]);
    fingersUpStatus = getFingersUpStatus(landmarks, handType);
  }

  return {
    handVisible,
    indexFinger,
    distance,
    fingersUpStatus,
  };
};