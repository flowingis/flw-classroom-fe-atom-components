import React from 'react';

type BaseInputProps = {
  status?: 'warning' | 'error' | 'success';
  placeholder: string;
};

type TextInputProps = {
  value?: string;
  onChange?: (e: string) => void;
  type?: 'text' | 'password';
};

type NumberInputProps = {
  value?: number;
  onChange?: (e: number) => void;
  min: number;
  max: number;
  step: number;
  type: 'number';
};

type InputProps = BaseInputProps & (TextInputProps | NumberInputProps);

export const Input: React.FC<InputProps> = ({
  value,
  status,
  placeholder,
  ...props
}) => {
  const { type, onChange, children, ...attr } = props;
  return (
    <input
      className={`input_type1 input_type1--${status}`}
      type={props.type || 'text'}
      placeholder={placeholder}
      value={value}
      {...attr}
      onChange={(e) => {
        if (!props.onChange) return;
        if (props.type === 'number') {
          props.onChange(e.target.valueAsNumber);
        } else {
          props.onChange(e.target.value);
        }
      }}
    />
  );
};
