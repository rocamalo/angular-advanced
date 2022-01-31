import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Input('nombreParaRenombrar')  progress: number = 80; in case you need to changed name 
  @Input()  progress: number = 80;
  @Input()  btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  // getPercentage() {
  //   return `${this.progress}%`;
  // }

  get getPercentage() {
    return `${this.progress}%`;
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeValue( val: number ) {
    if (this.progress >= 100 && val >= 0) {
      this.valorSalida.emit(100);
       this.progress = 100;
       return
    }

    if (this.progress <= 0 && val < 0) {
      this.valorSalida.emit(0);
       this.progress = 0;
       return
    }
    this.progress+= val;
    this.valorSalida.emit(this.progress);
     
    
  }

  onChange( event: any) {

    if( event >= 100) {
      this.progress = 100;
    } else if( event <= 0) {
      this.progress = 0;
    } else  {
      this.progress = event;
    }
    this.valorSalida.emit(this.progress);
  }
}
