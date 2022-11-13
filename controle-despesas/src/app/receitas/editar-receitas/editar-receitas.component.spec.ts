import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReceitasComponent } from './editar-receitas.component';

describe('EditarReceitasComponent', () => {
  let component: EditarReceitasComponent;
  let fixture: ComponentFixture<EditarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
