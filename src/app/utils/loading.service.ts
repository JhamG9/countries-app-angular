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
  showLoading(): void {
    this.showLoadingVar = true;
  }

  /**
   * Function hidde the loading
   */
  hiddeLoading(): void {
    this.showLoadingVar = false;
  }
}
