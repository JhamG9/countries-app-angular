import { TestBed } from '@angular/core/testing';

import { ApiCountryService } from './api-country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiCountryService', () => {
  let service: ApiCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testing function getCountriesByRegion()', () => {
    expect(service.getCountriesByRegion('Americas')).toBeDefined();
  });

  it('Testing function getCountriesByName()', () =>{
    expect(service.getCountriesByName('Colomb')).toBeDefined();
  });
});
