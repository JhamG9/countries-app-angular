import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/business/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public countryService: CountryService) { }

  ngOnInit(): void {  
    this.countryService.getAllCountries();
  }

}
