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
   * Función ve el detalle del pais
   * @param country objeto de la respuesta
   */
  seeDetailCountry(country: any) {
    this.router.navigate([`/detail/${country.name}`]);
  }

}
