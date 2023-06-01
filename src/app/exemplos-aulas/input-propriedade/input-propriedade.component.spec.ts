import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropriedadeComponent } from './input-propriedade.component';

describe('InputPropriedadeComponent', () => {
  let component: InputPropriedadeComponent;
  let fixture: ComponentFixture<InputPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropriedadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
