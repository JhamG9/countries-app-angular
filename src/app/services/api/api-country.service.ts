import { Injectable } from '@angular/core';
import { sprintf } from 'sprintf-js';
import { ApiService } from './api.service';
import { Constants } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiCountryService {

  constructor(private api: ApiService) { }

  /**
   * 
   * Function gets the countries by continent in the endpoint
   * @param continent name continent
   */
  getCountriesByRegion(continent: string) {
    return this.api.get(`${Constants.endpoints.region}${continent}`);
  }

  /**
   * Function gets all the countries of the endpoint
   */
  getAllCountries() {
    return this.api.get(`${Constants.endpoints.all}`);
  }

  /**
   * Function gets the countries by name in the endpoint
   */
  getCountriesByName(name: string) {
    return this.api.get(`${Constants.endpoints.searchByName}${name}`);
  }

  /**
   * Function get the country by name on the endpoint
   * @param name name of country
   */
   getCountryByName(name: string) {
    return this.api.get(sprintf(Constants.endpoints.getCountryByName, name));
  }
}
