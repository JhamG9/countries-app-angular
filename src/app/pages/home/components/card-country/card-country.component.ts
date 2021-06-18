import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config/config.service';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {

  @Input() data: any;

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

}
