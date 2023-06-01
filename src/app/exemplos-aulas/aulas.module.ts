import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    DataBindingComponent,
  ]
})
export class AulasModule { }
