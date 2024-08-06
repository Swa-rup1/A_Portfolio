import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, SharedModule],
  exports: [ServicesComponent],
})
export class ServicesModule {}
