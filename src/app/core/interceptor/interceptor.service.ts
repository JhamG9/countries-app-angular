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
   * Método para interceptar las peticiones al API, colocar las cabeceras y manejar el error en caso de que suceda
   * @param req La peticion en curso
   * @param next La continuacion del la peticion
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.includes('location.services.mozilla.com') && !req.url.includes('assets/i18n')) {
      const headers: HeaderObject = {};
      req = req.clone({ setHeaders: headers, responseType: 'json' });
    }

    // Continua con la peticion
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Aqui se manejan los errores ej: 
          // 400 = mostrar mensaje,
          // 302 = redireccionar
          return throwError(error);
        })
      );
  }
}
