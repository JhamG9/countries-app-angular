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
   * Función cambia a modo dark
   */
  changeDarkMode() {
    this.config.themeBlack = !this.config.themeBlack;
  }
}
