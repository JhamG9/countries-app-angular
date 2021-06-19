import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface HeaderObject {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
/**
 * The intermediary of each request made by the application.
 */
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  /**
   * Method to intercept requests to the API, place the headers and handle the error in case it happens
   * @param req The petition in progress
   * @param next The continuation of the petition
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.includes('location.services.mozilla.com') && !req.url.includes('assets/i18n')) {
      const headers: HeaderObject = {};
      req = req.clone({ setHeaders: headers, responseType: 'json' });
    }

    // Continue with the petition
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Here the errors are handled EX:  
          // 400 = show message,
          // 302 = redirect
          return throwError(error);
        })
      );
  }
}
