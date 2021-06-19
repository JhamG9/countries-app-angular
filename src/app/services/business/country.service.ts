import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/utils/loading.service';
import { ApiCountryService } from '../api/api-country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesList: [] = [];
  countryDetail: any;

  constructor(private apiCountryService: ApiCountryService,
    private loadingService: LoadingService) { }

  /**
   * Funtion find countries by continent
   * @param continent name continent
   */
  getCountriesByContinent(continent: string): void {
    this.apiCountryService.getCountriesByRegion(continent).subscribe((resp: any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Function get all countries
   */
  getAllCountries(): void {
    this.apiCountryService.getAllCountries().subscribe((resp: any): void => {
      this.countriesList = resp;
    });
  }

  /**
   * Function find countries by name
   * @param name name of country
   */
  getCountriesByName(name: string): void {
    this.apiCountryService.getCountriesByName(name).subscribe((resp: any) => {
      this.countriesList = resp;
    });
  }

  /**
   * Function find the country by name
   * @param name name of country
   */
  getCountryByName(name: string): void {
    this.loadingService.showLoading();
    this.countryDetail = null;
    this.apiCountryService.getCountryByName(name).subscribe((resp: any) => {
      this.countryDetail = resp[0];
      this.loadingService.hiddeLoading();
    });
  }
}
