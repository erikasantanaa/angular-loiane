import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    DataBindingComponent
  ]
})
export class AulasModule { }
