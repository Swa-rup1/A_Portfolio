import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from './ReusableComp/section-heading/section-heading.component';
import { LogoComponent } from './ReusableComp/logo/logo.component';
import { CardAnimationDirective } from './ReusableComp/Directive/card-animation.directive';
import { ButtonComponent } from './ReusableComp/button/button.component';

@NgModule({
  declarations: [
    SectionHeadingComponent,
    LogoComponent,
    CardAnimationDirective,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    SectionHeadingComponent,
    LogoComponent,
    CardAnimationDirective,
    ButtonComponent,
  ],
})
export class SharedModule {}
