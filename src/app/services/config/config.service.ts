import { Injectable } from '@angular/core';
import { Constants } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  themeBlack: boolean = false;

  constructor() { }

  /**
   * Function load theme config from storage
   */
  loadThemeInStorage() {
    const darkTheme = localStorage.getItem(Constants.storageKeys.darkTheme);
    if (darkTheme === 'true') {
      this.themeBlack = true;
    }
  }

}
