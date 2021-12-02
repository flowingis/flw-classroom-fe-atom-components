import { Injectable } from '@angular/core';

export type Color = {
  id: string;
  label: string;
};

@Injectable()
export class ColorsService {
  getColors(): Color[] {
    return [
      {
        id: 'red',
        label: 'Red',
      },
      {
        id: 'orange',
        label: 'Orange',
      },
      {
        id: 'green',
        label: 'Green',
      },
    ];
  }
}
