import { Component, Input } from '@angular/core';
import { FlwInputBaseComponent } from './input-base.component';

@Component({
  selector: 'flowing-input[type="number"]',
  template: `
    <input
      [ngClass]="cssClass"
      [type]="type"
      [placeholder]="placeholder"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      (input)="onValueChange($event)"
    />
  `,
  styles: [
    `
      :host {
        display: grid;
      }
    `,
  ],
})
export class FlwInputNumberComponent extends FlwInputBaseComponent<
  'number',
  number
> {
  @Input()
  min?: number = Number.MIN_VALUE;

  @Input()
  max?: number = Number.MAX_VALUE;

  @Input()
  step?: number = 1;

  onValueChange(value: Event) {
    const newValue = (value.target as HTMLInputElement).valueAsNumber;
    this.valueChange.emit(newValue);
  }
}
