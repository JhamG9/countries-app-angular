import { Injectable } from '@angular/core';
import { ApiCountryService } from '../api/api-country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesList: [] = [];
  countryDetail: any;


  constructor(private apiCountryService: ApiCountryService) { }

  /**
   * Función obtiene los paises por continente
   * @param region nombre del continente
   */
  getCountriesByContinent(region: string) {
    this.apiCountryService.getCountriesByRegion(region).subscribe((resp: any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Función obtiene todos los paises
   */
  getAllCountries() {
    this.apiCountryService.getAllCountries().subscribe((resp: any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Función busca paises por nombre
   * @param name nombre del pais a buscar
   */
  getCountriesByName(name: string) {
    this.apiCountryService.getCountriesByName(name).subscribe((resp: any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Función busca el pais por nombre
   * @param name nombre del país
   */
  getCountryByName(name: string) {
    this.countryDetail = null;
    this.apiCountryService.getDataCountryByName(name).subscribe((resp: any) => {
      this.countryDetail = resp[0];
      console.log(this.countryDetail);
    });
  }
}
