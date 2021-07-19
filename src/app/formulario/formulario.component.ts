import { Egreso } from './../engreso/egreso.model';
import { ingreso } from './../ingreso/ingreso.model';
import { EgresoServicio } from './../engreso/egreso.servicio';
import { IngresoServicio } from './../ingreso/ingreso.servicio';
import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string= "ingresoOperacion";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;

  }

  agregarValor(){

    if(this.tipo == "ingresoOperacion")
    //this.ingresoOperacion = formatCurrency()
            this.ingresoServicio.ingresos.push(new ingreso(this.descripcionInput,this.valorInput));
    else
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));

  }

}
