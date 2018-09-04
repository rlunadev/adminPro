import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso1: number = 50;
  progreso2: number = 20;
  constructor() { }

  ngOnInit() {
  }
  // actualizar(event: number) {
  //   this.progreso = event;
  // console.log('output', event);
  // }
  // actualizar2(event: number) {
  //   this.progreso2 = event;
  // console.log('output', event);
  // }
}
