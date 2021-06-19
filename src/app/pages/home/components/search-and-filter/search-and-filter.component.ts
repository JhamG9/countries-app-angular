import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown';
import { ConfigService } from 'src/app/services/config/config.service';
import { CountryService } from '../../../../services/business/country.service';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent {

  continents: Array<Dropdown> = [
    { id: 'Africa', label: 'Africa' },
    { id: 'Americas', label: 'Americas' },
    { id: 'Asia', label: 'Asia' },
    { id: 'Europe', label: 'Europe' },
    { id: 'Oceania', label: 'Oceania' },
  ];

  constructor(public config: ConfigService,
    private countryService: CountryService) { }

  /**
   * Function run when an option is selected
   * @param item object type Dropdown
   */
  selectContinent(item: Dropdown) {
    this.countryService.getCountriesByContinent(item.id);
  }

  /**
   * Function is executed when the value in the input search changes
   * @param value value written to input
   */
  changeInputSearch(value) {
    this.countryService.getCountriesByName(value);
  }

}
