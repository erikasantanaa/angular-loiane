import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponent } from './meu-segundo.component';

describe('MeuSegundoComponent', () => {
  let component: MeuSegundoComponent;
  let fixture: ComponentFixture<MeuSegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuSegundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
