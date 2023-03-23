import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';



@NgModule({
  declarations: [
    CursosDetalhesComponent
  ],
  imports: [
    CommonModule,
    CursosComponent
  ]
})
export class CursosModule { }
