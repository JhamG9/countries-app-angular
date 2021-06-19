import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

  /**
   * Function changes to dark or normal mode
   */
  changeDarkMode() {
    this.config.themeBlack = !this.config.themeBlack;
    console.log("Cambio",this.config.themeBlack);
    localStorage.setItem(Constants.storageKeys.darkTheme, `${this.config.themeBlack}`);
  }
}
