import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from 'src/app/services/data/nav-items';
import { hero_icon } from 'src/app/services/data/nav-items';
// declare var require: any
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  {
  navItems = NAV_ITEMS;
  hero_icon= hero_icon;
  constructor() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerMenu && mobileNav) {
      hamburgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });
    }
  }
}
