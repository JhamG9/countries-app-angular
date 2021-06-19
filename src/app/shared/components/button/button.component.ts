import { Component, EventEmitter, Output } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() outputClick = new EventEmitter<boolean>();

  constructor(public config: ConfigService) { }

  /**
   * Function emits when the button is clicked
   */
  clickButton(): void {
    this.outputClick.emit(true);
  }

}
