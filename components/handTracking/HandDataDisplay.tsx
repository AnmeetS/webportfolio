import React from 'react';

interface HandData {
  handVisible: boolean;
  indexFinger?: { x: number; y: number; z: number };
}

interface HandDataDisplayProps {
  handData: HandData | null;
}

const HandDataDisplay: React.FC<HandDataDisplayProps> = ({ handData }) => (
  <div className="bg-foreground w-full h-80 p-4 flex flex-col">
    <div className="">
      {handData?.handVisible ? (
        <span>There is a Hand</span>
      ) : (
        <span>There is no Hand</span>
      )}
    </div>
    <br/>
    {handData?.handVisible && (
      <div className="">
        <div>
          <div>the X coordinate is: {handData.indexFinger?.x}</div>
          <div>the Y coordinate is: {handData.indexFinger?.y}</div>
          <div>the Z coordinate is: {handData.indexFinger?.z}</div>
        </div>
      </div>
    )}
  </div>
);

export default HandDataDisplay;
