import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { AulasModule } from './exemplos-aulas/aulas.module';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
    MeuPrimeiroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AulasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
