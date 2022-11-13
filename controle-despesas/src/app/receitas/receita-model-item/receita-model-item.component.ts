import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-receita-model-item',
  templateUrl: './receita-model-item.component.html',
  styleUrls: ['./receita-model-item.component.css']
})
export class ReceitaModelItemComponent implements OnInit {
  @Input() receita!: { descricao: any; valor:any;}

  constructor() { }

  ngOnInit(): void {
  }

}