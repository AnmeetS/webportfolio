import React from 'react';

interface PanningSlidersProps {
  onPanXChange: React.MutableRefObject<(value: number) => void>;
  onPanYChange: React.MutableRefObject<(value: number) => void>;
}

const PanningSliders: React.FC<PanningSlidersProps> = ({ onPanXChange, onPanYChange }) => {
  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if(onPanXChange.current) {
      onPanXChange.current(value);
    }
  };

  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if(onPanYChange.current) {
      onPanYChange.current(value);
    }
  };

  return (
    <div>
      <label>
        Horizontal Pan:
        <input type="range" min="-100" max="100" onChange={handleXChange} />
      </label>
      <label>
        Vertical Pan:
        <input type="range" min="-100" max="100" onChange={handleYChange} />
      </label>
    </div>
  );
};

export default PanningSliders;
