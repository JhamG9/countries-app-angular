import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../services/config.service';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit(): void {
  }

}
