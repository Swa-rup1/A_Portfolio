import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent  {

  constructor() { }

  @Input() logoUrl: string = '';
  @Input() altText: string = 'Logo';
  @Input() class: string = '';
  @Input() id: string = '';

}
