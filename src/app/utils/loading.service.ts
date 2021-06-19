import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  showLoadingVar: boolean = false;

  constructor() { }

  /**
   * Function show the loading
   */
  showLoading() {
    this.showLoadingVar = true;
  }

  /**
   * Function hidde the loading
   */
  hiddeLoading() {
    this.showLoadingVar = false;
  }
}
