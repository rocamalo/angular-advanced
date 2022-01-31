import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  titleSales: string = "Sales";
  titleOrders: string = "Orders";
  titleClients: string = "Clients";
  titleProviders: string = "Providers";

  labels1: string[] = [ 'Tacos', 'Pan', 'Pescado' ];

  public data1 = [ 100, 100, 100 ];
 

  

  constructor() { }

  ngOnInit(): void {
  }

}
