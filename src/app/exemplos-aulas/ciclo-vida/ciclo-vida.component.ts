import { AfterContentChecked,
   AfterContentInit,
   AfterViewChecked,
   AfterViewInit,
   Component,
   DoCheck,
   OnChanges,
   OnDestroy,
   OnInit }
   from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnChanges, OnInit,
            DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  constructor() {
    this.log('construtor');
  }

  ngOnChages() {
    this.log('ngOnChanges');
  }

  ngOnInit(){
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit ');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  //para não ficar repetindo o console.log();
  private log(hook: string){
    console.log(hook);
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}
