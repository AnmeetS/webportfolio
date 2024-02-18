export const isPointerFingerUp = (landmarks:any) => {
    // Assuming landmarks[8] is the tip of the index finger and landmarks[5] is the corresponding MCP joint
    // This is a simple heuristic and may need adjustment based on actual landmark indices and conditions
    const indexFingerTip = landmarks[8];
    const indexFingerMCP = landmarks[5];
    
    // Assuming landmarks[4] is the tip of the thumb for a basic "pointer finger up" gesture detection
    const thumbTip = landmarks[4];
    
    // Simple condition: index finger is extended and thumb is not too high compared to MCP joint
    return indexFingerTip.y < indexFingerMCP.y && thumbTip.y > indexFingerMCP.y;
  };
  