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
  @Output() valueChange = new EventEmitter<Dropdown>();

  showOptions: boolean = false;

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

  /**
   * Función muestra las opciones del dropdown
   */
  showitems() {
    this.showOptions = !this.showOptions;
  }

  /**
   * Función selecciona una opción del listado de items
   */
  selectItem(item: Dropdown) {
    this.showOptions = false;
    this.valueChange.emit(item);
  }

}
