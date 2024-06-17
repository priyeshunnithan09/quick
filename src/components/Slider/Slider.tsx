import React, { useState } from 'react';
import './Slider.scss';

export interface SliderProps {
  type: 'Continuous' | 'Discreet';
  subtype: 'Single' | 'Range';
  numberOfSteps?: number;
  handleSize: 'Size_24' | 'Size_32';
  onChange?: (value: number | [number, number]) => void;
}

const Slider: React.FC<SliderProps> = ({ type, subtype, numberOfSteps = 10, handleSize, onChange }) => {
  const initialValue: number | [number, number] = subtype === 'Range' ? [0, 50] : 50;
  const [value, setValue] = useState<number | [number, number]>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = subtype === 'Range' 
      ? [parseInt(event.target.value, 10), (value as [number, number])[1]]
      : parseInt(event.target.value, 10);

    setValue(newValue as number | [number, number]);
    if (onChange) {
      onChange(newValue as number | [number, number]);
    }
  };

  const handleSecondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (subtype === 'Range') {
      const newValue: [number, number] = [(value as [number, number])[0], parseInt(event.target.value, 10)];
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className={`slider ${handleSize}`}>
      <input
        type="range"
        min="0"
        max="100"
        step={type === 'Discreet' ? numberOfSteps : undefined}
        value={subtype === 'Range' ? (value as [number, number])[0] : (value as number)}
        onChange={handleChange}
      />
      {subtype === 'Range' && (
        <input
          type="range"
          min="0"
          max="100"
          step={type === 'Discreet' ? numberOfSteps : undefined}
          value={(value as [number, number])[1]}
          onChange={handleSecondChange}
        />
      )}
    </div>
  );
};

export default Slider;

