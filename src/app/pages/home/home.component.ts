import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../services/business/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public countryService: CountryService,
    public router: Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries();
  }

  /**
   * Function redirects to country detail page
   * @param country object of response countries
   */
  seeDetailCountry(country: any): void {
    this.router.navigate([`/detail/${country.name}`]);
  }

}
