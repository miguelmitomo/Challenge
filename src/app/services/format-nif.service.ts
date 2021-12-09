import { Injectable } from '@angular/core';

export interface FormatOption {
  value: string;
  text: string;
  action: Function;
}

@Injectable({ providedIn: 'root' })
export class FormatNifService {
  public formatOptions: FormatOption[] = [
    {
      value: '1',
      text: 'Mostrar NIF completo',
      action: (data: string) => {
        return data;
      },
    },
    {
      value: '2',
      text: 'Ocultar 3 ultimos digitos',
      action: (data: string) => {
        return data.length >= 3
          ? data.substring(0, data.length - 3) + '***'
          : data.replace(/./g, '*');
      },
    },
    {
      value: '3',
      text: 'Ocultar NIF completo',
      action: (data: string) => {
        return data.replace(/./g, '*');
      },
    },
  ];

  constructor() {}

  public formatDataByOptionValue(optionValue: string, dataToFormat): string {
    return this.formatOptions
      .filter((option) => option.value === optionValue)[0]
      .action(dataToFormat);
  }

  private getNumberO;
}
