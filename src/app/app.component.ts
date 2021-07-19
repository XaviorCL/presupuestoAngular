import { EgresoServicio } from './engreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { Component } from '@angular/core';
import { Egreso } from './engreso/egreso.model';
import { ingreso } from './ingreso/ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private IngresoServicio:IngresoServicio,
              private EgresoServicio:EgresoServicio){
              this.ingresos = IngresoServicio.ingresos;
              this.egresos = EgresoServicio.egresos;

              }

     getIngresoTotal(){
      let ingresoTotal:number =0;
      this.ingresos.forEach(entrada => {
        ingresoTotal += entrada.valor;
      }
      );
      return ingresoTotal;
     }

     getGastoTotal(){
      let gastoTotal:number=0;
      this.egresos.forEach(gasto => {
        gastoTotal += gasto.valor;
      }
      );
      return gastoTotal;
     }

     getPorcentajeTotal(){
       return this.getGastoTotal()/this.getIngresoTotal();
     }

     getPresupuestoTotal(){
      this.getIngresoTotal() - this.getGastoTotal();
     }
}
