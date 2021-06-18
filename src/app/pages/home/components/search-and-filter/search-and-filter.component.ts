import { Component, OnInit } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown';
import { ConfigService } from 'src/app/services/config/config.service';
import { CountryService } from '../../../../services/business/country.service';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent implements OnInit {

  continents: Array<Dropdown> = [
    { id: 'Africa', label: 'Africa' },
    { id: 'Americas', label: 'Americas' },
    { id: 'Asia', label: 'Asia' },
    { id: 'Europe', label: 'Europe' },
    { id: 'Oceania', label: 'Oceania' },
  ];

  constructor(public config: ConfigService,
    private countryService:CountryService) { }

  ngOnInit(): void {
  }

  /**
   * Función se ejecuta cuando se selecciona una opción
   * @param item objeto del ripo Dropdown
   */
  selectContinent(item: Dropdown) {
    this.countryService.getCountriesByContinent(item.id);    
  }

}
