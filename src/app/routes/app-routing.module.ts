import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AboutComponent } from '../modules/about/about.component';
import { ContactComponent } from '../modules/contact/contact.component';
import { ProjectsComponent } from '../modules/projects/projects.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
