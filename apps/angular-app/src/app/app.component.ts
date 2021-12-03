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
    this.onCountryChange(this.countries[0].code);
    this.colors = [{ id: '', label: '' }, ...colorsService.getColors()];
    this.onColorChange(this.colors[0].id);
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
