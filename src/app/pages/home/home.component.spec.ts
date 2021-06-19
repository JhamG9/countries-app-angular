import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchAndFilterComponent } from './components/search-and-filter/search-and-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';
import { mockgetAllCountries } from 'src/app/shared/mocks/countries.mock';
import { ApiCountryService } from 'src/app/services/api/api-country.service';
import { DetailCountryComponent } from '../detail-country/detail-country.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiCountryService: ApiCountryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'detail/:name', component: DetailCountryComponent }
        ]),
        SharedModule
      ],
      declarations: [
        HomeComponent,
        SearchAndFilterComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    apiCountryService = TestBed.inject(ApiCountryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function onInit and getAllCountries() service', () => {
    const spyCoutries = spyOn(apiCountryService, 'getAllCountries').and.callFake(() => {
      return of(mockgetAllCountries);
    });

    expect(component.ngOnInit()).toBeUndefined();
    expect(spyCoutries).toHaveBeenCalled();
  });

  it('Testing function seeDatailCountry()', () => {
    expect(component.seeDetailCountry(mockgetAllCountries[0])).toBeUndefined();
  });
});
