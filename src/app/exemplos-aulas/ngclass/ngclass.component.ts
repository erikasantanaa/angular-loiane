import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {
  meuFavorito = false;

  ativo = false;
  tamanhoFonte = 10;

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: null,
    responsavelElvis: {
      usuário: null
    }
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }
}
