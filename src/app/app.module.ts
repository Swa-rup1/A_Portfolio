import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NAV_ITEMS } from './services/data/nav-items';

import { ServicesModule } from './modules/assistance/services.module';
import { ContactModule } from './modules/contact/contact.module';
import { FooterModule } from './modules/footer/footer.module';
import { AboutModule } from './modules/about/about.module';

import { NavbarModule } from './modules/navbar/navbar.module';
import { HeroModule } from './modules/hero/hero.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    AboutModule,
    ServicesModule,
    ContactModule,
    FooterModule,
    NavbarModule,
    HeroModule,
    ProjectsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  navItems = NAV_ITEMS;
}
