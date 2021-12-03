import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className="input_type1"
      type="text"
      placeholder="Text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
