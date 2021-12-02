import { ReactElement } from "react";

export type KeyOfPossibleValue<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

type SelectProps<
  O extends { [key in K | V | T]: string | number } & Record<K | V | T | string, string | number | unknown>,
  K extends KeyOfPossibleValue<O, string | number | symbol>,
  V extends KeyOfPossibleValue<O, string | number>,
  T extends KeyOfPossibleValue<O, string>
  > = {
    options: O[];
    value?: O[V];
    propKey: K;
    propValue: V;
    propText: T;
    onChange: (value: O[V]) => void;
  }

export const Select = <
  O extends { [key in K | V | T]: string | number } & Record<K | V | T | string, string | number | unknown>,
  K extends KeyOfPossibleValue<O, string | number | symbol>,
  V extends KeyOfPossibleValue<O, string | number>,
  T extends KeyOfPossibleValue<O, string>
>({
  options,
  value,
  propKey,
  propValue,
  propText,
  onChange,
}: SelectProps<O, K, V, T>): ReactElement | null => {

  return <select
    className='select_style1'
    value={value}
    onChange={
      e => {
        onChange(e.target.value as O[V]);
      }
    }>
    {options.map(o => (
      <option
        key={o[propKey]}
        value={o[propValue]}
      >{o[propText]}</option>
    ))}
  </select>
}
