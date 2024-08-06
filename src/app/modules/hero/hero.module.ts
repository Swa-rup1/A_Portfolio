import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeroComponent],
})
export class HeroModule {}
