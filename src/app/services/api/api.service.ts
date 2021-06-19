import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * Includes all types of requests to make
 */
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Function performs a get request
   * @param url url to make the request
   * @param params additional parameters
   */
  get(url, params = '') {
    return this.http.get(`${environment.API}${url}` + params);
  }
}
