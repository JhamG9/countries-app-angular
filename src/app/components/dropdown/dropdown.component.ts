import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

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

}
