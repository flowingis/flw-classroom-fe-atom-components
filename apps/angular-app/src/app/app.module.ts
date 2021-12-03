import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlwInputModule, FlwSelectModule } from './atoms';
import { ColorsService } from './services/colors.service';
import { CountriesService } from './services/countries.services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FlwInputModule,
    FlwSelectModule,
  ],
  providers: [ColorsService, CountriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
