import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Titulo';
  @Input('actualizaValor') progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }
  ngOnInit() {
  }

  cambiarValor(valor) {
    if (this.progreso >= 0 && this.progreso < 100) {
      this.progreso = this.progreso + valor;
    }
    this.cambioValor.emit(this.progreso);
    return;
  }
  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress);
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
