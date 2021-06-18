import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  themeBlack: boolean = true;
  constructor() { }

}