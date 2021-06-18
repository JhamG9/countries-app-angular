
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * Incluye todas los tipos de peticiones para realizar
 */
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Función realiza una petición get
   * @param url url a realizar la petición
   * @param params parametros adicionales en caso que se requiera
   */
  get(url, params = '') {
    return this.http.get(`${environment.API}${url}` + params);
  }
}
