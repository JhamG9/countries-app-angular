import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/utils/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(public loading: LoadingService) { }
}
