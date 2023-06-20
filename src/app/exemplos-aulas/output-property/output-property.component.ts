import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
 @Input() valor = 0;

 @Output() mudouValor = new EventEmitter();

 @ViewChild('campoInput') campoValorInput = ElementRef;

 incrementa() {
    //acessando ao DOM e ao Template com ViewChild
    // console.log('valor input', this.campoValorInput.nativeElement.value);
    // this.campoValorInput.nativeElement.value++

    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
     // this.campoValorInput.nativeElement.value--
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
