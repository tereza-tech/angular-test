import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [ IntroComponent ],
  exports: [ IntroComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IntroModule {}