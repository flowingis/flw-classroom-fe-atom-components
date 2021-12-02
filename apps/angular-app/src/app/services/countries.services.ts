import { Injectable } from '@angular/core';

export type Country = {
  code: string;
  name: string;
};

@Injectable()
export class CountriesService {
  getCountries(): Country[] {
    return [
      {
        code: 'it',
        name: 'Italy',
      },
      {
        code: 'de',
        name: 'Germany',
      },
      {
        code: 'fr',
        name: 'France',
      },
    ];
  }
}
