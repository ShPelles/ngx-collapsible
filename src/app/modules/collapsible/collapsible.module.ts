import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsibleDirective } from './collapsible.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CollapsibleDirective],
  exports: [CollapsibleDirective],
})
export class CollapsibleModule { }
