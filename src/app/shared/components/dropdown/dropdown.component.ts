import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() items: Array<Dropdown> = [];
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter<Dropdown>();

  labelSelected: string = '';
  showOptions: boolean = false;

  constructor(public config: ConfigService) { }

  /**
   * Function show or hide options
   */
  showOrHiddeitems(): void {
    this.showOptions = !this.showOptions;
  }

  /**
   * Function selects an option from the list of items
   */
  selectItem(item: Dropdown): void {
    this.showOptions = false;
    this.labelSelected = item.label;
    this.valueChange.emit(item);
  }

}
