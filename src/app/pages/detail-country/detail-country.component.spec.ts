import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCountryComponent } from './detail-country.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { MockLocationStrategy } from '@angular/common/testing'
import { LocationStrategy } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiCountryService } from 'src/app/services/api/api-country.service';
import { mockgetAllCountries, mockGetCountryByName } from 'src/app/shared/mocks/countries.mock';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


describe('DetailCountryComponent', () => {
  let component: DetailCountryComponent;
  let fixture: ComponentFixture<DetailCountryComponent>;
  let apiCountryService: ApiCountryService;
  let router:Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
        ]),
        SharedModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DetailCountryComponent,
      ],
      providers: [
        { provide: LocationStrategy, useClass: MockLocationStrategy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCountryComponent);
    component = fixture.componentInstance;

    apiCountryService = TestBed.inject(ApiCountryService);
    router = TestBed.inject(Router)
    route = TestBed.inject(ActivatedRoute)

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function onInit and getCountryByName', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get')
    spyRoute.and.returnValue('Colombia');

    const spyGetCountryByName = spyOn(apiCountryService, 'getCountryByName').and.callFake(() => {
      return of(mockGetCountryByName);
    });
    expect(component.ngOnInit()).toBeUndefined();
    expect(spyGetCountryByName).toHaveBeenCalled();
  });

  it('Testing function goBackPage()', () =>{
    expect(component.goBackPage()).toBeUndefined();
  });
});
