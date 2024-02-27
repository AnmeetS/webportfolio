const HAND_PALM_CONNECTIONS = [[0, 1], [0, 5], [9, 13], [13, 17], [5, 9], [0, 17]];
const HAND_THUMB_CONNECTIONS = [[1, 2], [2, 3], [3, 4]];
const HAND_INDEX_FINGER_CONNECTIONS = [[5, 6], [6, 7], [7, 8]];
const HAND_MIDDLE_FINGER_CONNECTIONS = [[9, 10], [10, 11], [11, 12]];
const HAND_RING_FINGER_CONNECTIONS = [[13, 14], [14, 15], [15, 16]];
const HAND_PINKY_FINGER_CONNECTIONS = [[17, 18], [18, 19], [19, 20]];

// Combine all connections into a single array
export const HAND_CONNECTIONS = ([] as never[]).concat(
    HAND_PALM_CONNECTIONS as never[],
    HAND_THUMB_CONNECTIONS as never[],
    HAND_INDEX_FINGER_CONNECTIONS as never[],
    HAND_MIDDLE_FINGER_CONNECTIONS as never[],
    HAND_RING_FINGER_CONNECTIONS as never[],
    HAND_PINKY_FINGER_CONNECTIONS as never[]
);
