import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [ 'Java' , 'Ext JS' , 'Angular' ];
  }
}
