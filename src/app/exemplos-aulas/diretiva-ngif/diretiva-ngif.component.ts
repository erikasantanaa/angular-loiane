import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit{

  cursos: string [] = ['Angular'];

  mostrarCursos = false;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
