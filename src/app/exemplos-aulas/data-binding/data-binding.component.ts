import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url = 'http://loiane.com';
  urlImage1 = 'https://www.voceselembra.com/wp-content/uploads/2021/03/Hello-Kitty-1.jpg'
  urlImage2 = 'https://ogimg.infoglobo.com.br/cultura/13748681-aea-0a0/FT1086A/760/Hello.jpg'
  cursoAngular = true;
  valorAtual = '';
  valorSalvo: any;
  isMouseOver = false;
  nomeDigitar = 'abc';
  pessoa: any = {
    nome: 'def',
    idade:  20,
  }
  valorInical = 12;
  nomeDoCurso = 'Nome do curso: Angular (exemplo de input-property)'

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }


  constructor() {}

}
