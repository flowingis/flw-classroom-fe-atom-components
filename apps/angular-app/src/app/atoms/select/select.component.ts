import { Component, EventEmitter, Input, Output } from '@angular/core';

export type KeyOfPossibleValue<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

@Component({
  selector: 'flowing-select',
  template: `
    <select
      class="select_style1"
      [ngModel]="value"
      (ngModelChange)="valueChange.emit($event)"
    >
      <option
        *ngFor="let opt of options; trackBy: trackBy"
        [value]="opt[valueProp]"
      >
        {{ opt[textProp] }}
      </option>
    </select>
  `,
})
export class FlwSelectComponent<
  O extends { [key in K | V | T]: string | number } & Record<
    K | V | T | string,
    string | number | unknown
  >,
  K extends KeyOfPossibleValue<O, string | number | symbol>,
  V extends KeyOfPossibleValue<O, string | number>,
  T extends KeyOfPossibleValue<O, string>
> {
  @Input()
  value?: O[V];

  @Input()
  options!: O[];

  @Input()
  keyProp!: K;

  @Input()
  valueProp!: V;

  @Input()
  textProp!: T;

  @Output()
  valueChange = new EventEmitter<O[V]>();

  trackBy(_: number, option: O): O[K] {
    return option[this.keyProp];
  }
}
