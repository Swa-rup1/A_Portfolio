import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavBarComponent],
})
export class NavbarModule {}
