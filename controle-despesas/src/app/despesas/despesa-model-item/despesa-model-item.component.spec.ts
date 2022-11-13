import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaModelItemComponent } from './despesa-model-item.component';

describe('DespesaModelItemComponent', () => {
  let component: DespesaModelItemComponent;
  let fixture: ComponentFixture<DespesaModelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaModelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespesaModelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
