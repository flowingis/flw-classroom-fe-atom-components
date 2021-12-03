import { Component } from '@angular/core';
import { FlwInputBaseComponent } from './input-base.component';

@Component({
  selector: 'flowing-input:not([type="number"])',
  template: `
    <input
      [ngClass]="cssClass"
      [type]="type"
      [placeholder]="placeholder"
      [value]="value"
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
export class FlwInputComponent extends FlwInputBaseComponent<
  'text' | 'password',
  string
> {
  onValueChange(value: Event) {
    const newValue = (value.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}
