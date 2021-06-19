import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/business/country.service';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    public config: ConfigService,
    public countryService: CountryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.countryService.getCountryByName(`${data.get('name')}`);
    });
  }

  /**
   * Función redirecciona al listado de paises
   */
  goBackPage() {
    this.router.navigate(['']);
  }

}
