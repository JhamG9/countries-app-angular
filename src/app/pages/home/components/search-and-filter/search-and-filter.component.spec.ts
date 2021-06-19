import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterComponent } from './search-and-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { Dropdown } from 'src/app/models/dropdown';
import { ApiCountryService } from 'src/app/services/api/api-country.service';
import { of } from 'rxjs';
import { mockGetCountriesByContinent } from 'src/app/shared/mocks/countries.mock';

describe('SearchAndFilterComponent', () => {
  let component: SearchAndFilterComponent;
  let fixture: ComponentFixture<SearchAndFilterComponent>;
  let apiCountryService: ApiCountryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        SearchAndFilterComponent,
        InputComponent,
        DropdownComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndFilterComponent);
    component = fixture.componentInstance;

    apiCountryService = TestBed.inject(ApiCountryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function selectContinent and getCountriesByRegion', () => {
    const spyCountriesByName = spyOn(apiCountryService, 'getCountriesByRegion').and.callFake(() => {
      return of(mockGetCountriesByContinent);
    });

    const continent: Dropdown = { id: 'Americas', label: 'Americas' };
    expect(component.selectContinent(continent)).toBeUndefined();
    expect(spyCountriesByName).toHaveBeenCalled();
  });

  it('Testing function searchCountriesByName()', () => {
    const spySearchCountries = spyOn(apiCountryService, 'getCountriesByName').and.callFake(() =>{
        return of(mockGetCountriesByContinent[2]);
    });

    expect(component.searchCountriesByName('Uruguay'));
    expect(spySearchCountries).toHaveBeenCalled();
  });
});
