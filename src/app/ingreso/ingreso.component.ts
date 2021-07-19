import { IngresoServicio } from './ingreso.servicio';
import { Component, OnInit } from '@angular/core';
import { ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:ingreso[]=[];

  constructor(private ingresoServicio:IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(Ingreso:ingreso){
    this.ingresoServicio.eliminar(Ingreso);
  }

}
