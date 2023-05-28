import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DataBindingComponent
  ]
})
export class AulasModule { }
