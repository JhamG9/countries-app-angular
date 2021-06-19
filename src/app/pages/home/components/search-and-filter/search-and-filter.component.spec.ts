import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterComponent } from './search-and-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';

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
