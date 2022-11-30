import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  year:number;

  constructor() {

    this.year = new Date().getFullYear();

   }

  ngOnInit(): void {
  }

}
