import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

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
  }
}
