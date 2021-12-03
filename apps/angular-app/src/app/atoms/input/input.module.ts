import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlwInputNumberComponent } from './input-number.component';
import { FlwInputComponent } from './input.component';

@NgModule({
  imports: [CommonModule],
  exports: [FlwInputComponent, FlwInputNumberComponent],
  declarations: [FlwInputComponent, FlwInputNumberComponent],
})
export class FlwInputModule {}
