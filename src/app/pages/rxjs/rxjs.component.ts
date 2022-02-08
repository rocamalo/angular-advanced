import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { 
    let i = -1;
    const obs$ = new Observable( observer => {
      
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if(i===4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2) {
          observer.error("I reached 2");
        }
      }, 1000)
    });

    obs$.pipe(
      retry()
    ).subscribe( val => {
      console.log("Subs", val);
    },
    error => {
      console.warn("Error", error);
    },
    () => console.info("OBserver terminado"));
  }

  ngOnInit(): void {
  }

}
