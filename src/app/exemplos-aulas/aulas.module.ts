import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputPropriedadeComponent } from './input-propriedade/input-propriedade.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    InputOutputComponent,
    InputPropriedadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    DataBindingComponent,
    InputOutputComponent
  ]
})
export class AulasModule { }
