import { Injectable } from '@angular/core';
import { ApiCountryService } from '../api/api-country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesList: [] = []

  constructor(private apiCountryService: ApiCountryService) { }

  /**
   * Función obtiene los paises por continente
   * @param region nombre del continente
   */
  getCountriesByContinent(region: string) {
    this.apiCountryService.getCountriesByRegion(region).subscribe((resp:any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Función obtiene todos los paises
   */
  getAllCountries() {
    this.apiCountryService.getAllCountries().subscribe((resp:any) => {
      this.countriesList = resp;
    });
  }
}
