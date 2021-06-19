import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() icon: string = '';

  @Output() keyUpChange = new EventEmitter<string>();

  tempValue: string = '';

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

  /**
   * Función emite el cambio de valor en el input
   */
  keyUpInput() {
    if (this.tempValue) {
      this.keyUpChange.emit(this.tempValue);
    }
  }

}
