import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() items: Array<Dropdown> = [];
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter<Dropdown>();

  labelSelected: string = '';
  showOptions: boolean = false;

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

  /**
   * Function show or hide options
   */
  showitems() {
    this.showOptions = !this.showOptions;
  }

  /**
   * Function selects an option from the list of items
   */
  selectItem(item: Dropdown) {
    this.showOptions = false;
    this.labelSelected = item.label;
    this.valueChange.emit(item);
  }

}
