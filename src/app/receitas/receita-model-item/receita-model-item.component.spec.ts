import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaModelItemComponent } from './receita-model-item.component';

describe('ReceitaModelItemComponent', () => {
  let component: ReceitaModelItemComponent;
  let fixture: ComponentFixture<ReceitaModelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaModelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaModelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
