import { EgresoServicio } from './egreso.servicio';
import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-engreso',
  templateUrl: './engreso.component.html',
  styleUrls: ['./engreso.component.css']
})
export class EngresoComponent implements OnInit {

  gastos:Egreso[]=[];
  @Input() ingresoTotal:number;
  porcentaje:number;

  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.gastos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminarEgreso(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
       this.porcentaje = egreso.valor/this.ingresoTotal;

       return this.porcentaje;
  }

}
