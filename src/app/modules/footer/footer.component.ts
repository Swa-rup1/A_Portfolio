import { Component, OnInit } from '@angular/core';
import { hero_icon } from 'src/app/services/data/nav-items';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  hero_icon = hero_icon;
  constructor() {}

  ngOnInit(): void {}
}
