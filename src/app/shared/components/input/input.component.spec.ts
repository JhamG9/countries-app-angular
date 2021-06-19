import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        InputComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function keyUpInput()', () =>{
    component.tempValue = 'Colom';
    expect(component.keyUpInput()).toBeUndefined();
  });

  it('Testing function keyUpInput() when value is empty', () =>{
    component.tempValue = '';
    expect(component.keyUpInput()).toBeUndefined();
  });
});
