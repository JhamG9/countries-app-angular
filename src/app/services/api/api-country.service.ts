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
   * Función obtiene los paises por contiente
   * @param region nombre del contienente
   */
  getCountriesByRegion(region: string) {
    return this.api.get(`${Constants.endpoints.region}${region}`);
  }

  /**
   * Función obtiene todos los paises del endpoint
   */
  getAllCountries() {
    return this.api.get(`${Constants.endpoints.all}`);
  }

  /**
   * Función obtiene los paises por nombre del endpoint
   */
  getCountriesByName(name: string) {
    return this.api.get(`${Constants.endpoints.searchByName}${name}`);
  }

  /**
   * Función obtiene el pais por el nombre
   * @param name 
   */
  getDataCountryByName(name: string) {
    return this.api.get(sprintf(Constants.endpoints.getCountryByName, name));
  }
}
