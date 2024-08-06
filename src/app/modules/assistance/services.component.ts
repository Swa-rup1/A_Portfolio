import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/data/nav-items';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  Services = Services;

  constructor() { }

  ngOnInit(): void {
  }

}
