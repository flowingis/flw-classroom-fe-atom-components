import { Component } from '@angular/core';
import { Color, ColorsService } from './services/colors.service';
import { CountriesService, Country } from './services/countries.services';

@Component({
  selector: 'flowing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  textValue?: string = 'textValue';
  passwordValue?: string = '';
  numberValue?: number = 0;

  countries: Country[];
  colors: Color[];

  selectedCountyCode: Country['code'] | undefined;
  selectedCounty: Country | undefined;

  selectColorId: Color['id'] | undefined;
  selectColor: Color | undefined;

  constructor(
    colorsService: ColorsService,
    countriesService: CountriesService
  ) {
    this.countries = [
      { code: '', name: '' },
      ...countriesService.getCountries(),
    ];
    this.colors = [{ id: '', label: '' }, ...colorsService.getColors()];
  }

  onInputTextChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement | null)?.value;
    this.textValue = newValue;
  }

  onInputNumberChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement | null)?.valueAsNumber;
    this.numberValue = newValue;
  }

  onCountryChange(newValue: Country['code']): void {
    this.selectedCountyCode = newValue;
    this.selectedCounty = this.countries.find((c) => c.code === newValue);
  }

  onColorChange(newValue: Color['id']): void {
    this.selectColorId = newValue;
    this.selectColor = this.colors.find((c) => c.id === newValue);
  }
}
