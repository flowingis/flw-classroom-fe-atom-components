import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlwSelectComponent } from './select.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FlwSelectComponent],
  declarations: [FlwSelectComponent],
})
export class FlwSelectModule {}
