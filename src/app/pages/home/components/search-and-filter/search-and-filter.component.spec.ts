import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterComponent } from './search-and-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputComponent } from '../../../../components/input/input.component';
import { DropdownComponent } from '../../../../components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

describe('SearchAndFilterComponent', () => {
  let component: SearchAndFilterComponent;
  let fixture: ComponentFixture<SearchAndFilterComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
