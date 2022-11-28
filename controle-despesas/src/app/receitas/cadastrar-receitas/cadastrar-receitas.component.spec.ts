import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarReceitasComponent } from './cadastrar-receitas.component';

describe('CadastrarReceitasComponent', () => {
  let component: CadastrarReceitasComponent;
  let fixture: ComponentFixture<CadastrarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
