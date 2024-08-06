import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
