import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title!: string;
  constructor() {}

  @Input() logoUrl: string = '';
  @Input() altText: string = 'Logo';
  @Input() class: string = '';
  @Input() type: string = '';
  @Input() id: string = '';
}
