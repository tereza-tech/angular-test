import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderComponent } from './leader.component';

@NgModule({
  declarations: [ LeaderComponent ],
  exports: [ LeaderComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LeaderModule {}