import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { Dropdown } from 'src/app/models/dropdown';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function showOrHiddeitems()', () => {
    expect(component.showOrHiddeitems()).toBeUndefined();
  });

  it('Testing function selectItem()', () => {
    const item: Dropdown = { id: 'id', label: 'label' };
    expect(component.selectItem(item)).toBeUndefined();
  });
});
