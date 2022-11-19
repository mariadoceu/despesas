import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);

  }
  

}
