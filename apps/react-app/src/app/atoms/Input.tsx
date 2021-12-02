import classnames from "classnames";
import { FC } from "react";

type InputBaseProps = {
  placeholder?: string;
  status?: 'error' | 'success' | 'warning';
}

type InputTextAttribute = {
  type?: 'text' | 'password';
  value?: string;
}

type InputTextProps = InputBaseProps & InputTextAttribute & { onChange?: (value: string) => void; }

type InputNumberAttribute = {
  type: 'number';
  value?: number;
  min: number;
  max: number;
  step: number;
}
type InputNumberProps = InputBaseProps & InputNumberAttribute & { onChange?: (value: number) => void; }

type InputProps = InputTextProps | InputNumberProps;

export const Input: FC<InputProps> = ({
  placeholder,
  status,
  ...props
}) => {
  let propsHtml: InputTextAttribute | InputNumberAttribute
  if (props.type === 'number') {
    propsHtml = {
      type: props.type,
      value: props.value,
      min: props.min,
      max: props.max,
      step: props.step,
    }
  } else {
    propsHtml = {
      type: props.type || 'text',
      value: props.value,
    }
  }

  return <input
    className={
      classnames('input_type1', {
        [`input_type1--${status}`]: !!status,
      })
    }
    {...propsHtml}
    placeholder={placeholder}
    onChange={(e) => {
      if (!props.onChange) return
      props.type === 'number' ? props.onChange(e.target.valueAsNumber) : props.onChange(e.target.value)
    }}
  />
}
