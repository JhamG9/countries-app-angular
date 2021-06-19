import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { mockErrorResponse } from 'src/app/shared/mocks/interceptor.mock';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  let service: InterceptorService;
  let ngZone: NgZone;
  const err: any = { status: 500 };
  const next: any = {
    handle: (request: HttpRequest<any>) => ({
      pipe: (success) => {
        const catchError = (callback) => void callback({ status: 422 });
      },
      catch: (callback) => void callback(err)
    })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});

    ngZone = TestBed.inject(NgZone);
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testing function intercept() when petition http', () => {
    const request: HttpRequest<any> = new HttpRequest<any>
      ('GET', 'https://restcountries.eu/rest/v2/region/Americas');
    expect(service.intercept(request, next)).toBeUndefined();
  });

  it('render function intercept() when include `location.services.mozilla.com`', () => {
    const request: HttpRequest<any> = new HttpRequest<any>
      ('GET', 'location.services.mozilla.com');
    expect(service.intercept(request, next)).toBeUndefined();
  });

  it('Testing function interceptor in catchError when status is 404', () => {
    const httpRequestSpy: HttpRequest<any> = new HttpRequest<any>
      ('GET', 'https://api-dev.packen.co/login/api/v2/sign_in');
    const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);

    const mockResponse = mockErrorResponse;
    const mockError = new HttpErrorResponse(mockResponse);

    httpHandlerSpy.handle.and.returnValue(throwError(mockError));
    ngZone.run(() => {
      service.intercept(httpRequestSpy, httpHandlerSpy).subscribe(
        result => { },
        error => {
          expect(error).toBeDefined();
        }
      );
    });
  });

});
