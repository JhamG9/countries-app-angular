import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() click = new EventEmitter<boolean>();

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

  /**
   * Function emits when the button is clicked
   */
  clickButton() {
    this.click.emit(true);
  }

}
