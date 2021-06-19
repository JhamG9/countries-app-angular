import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCountryComponent } from './detail-country.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { MockLocationStrategy } from '@angular/common/testing'
import { LocationStrategy } from '@angular/common';


describe('DetailCountryComponent', () => {
  let component: DetailCountryComponent;
  let fixture: ComponentFixture<DetailCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
        ]),
        HttpClientTestingModule,
      ],
      declarations: [
        DetailCountryComponent,
        ButtonComponent
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
