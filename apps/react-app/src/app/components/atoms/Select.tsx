import { ReactElement } from 'react';

export type KeyOfPossibleValue<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

type SelectProps<
  T extends { [key in K | V | Z]: string | number } & Record<
    K | V | Z | string,
    string | number | unknown
  >,
  K extends KeyOfPossibleValue<T, string | number | symbol>,
  V extends KeyOfPossibleValue<T, number | string>,
  Z extends KeyOfPossibleValue<T, string>
> = {
  value?: string;
  onChange: (value: string) => void;
  options: T[];
  propKey: K;
  propValue: V;
  propText: Z;
};

export const Select = <
  T extends { [key in K | V | Z]: string | number } & Record<
    K | V | Z | string,
    string | number | unknown
  >,
  K extends KeyOfPossibleValue<T, string | number | symbol>,
  V extends KeyOfPossibleValue<T, number | string>,
  Z extends KeyOfPossibleValue<T, string>
>({
  value,
  onChange,
  options,
  propKey,
  propValue,
  propText,
}: SelectProps<T, K, V, Z>): ReactElement | null => {
  return (
    <select
      className="select_style1"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option[propKey]} value={option[propValue]}>
          {option[propText]}
        </option>
      ))}
    </select>
  );
};
