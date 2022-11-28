import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-despesa-model-item',
  templateUrl: './despesa-model-item.component.html',
  styleUrls: ['./despesa-model-item.component.css']
})
export class DespesaModelItemComponent implements OnInit {
  @Input() despesa!: { descricao: any; valor: any; vencimento: any; }

  constructor() { }

  ngOnInit(): void {
  }

}