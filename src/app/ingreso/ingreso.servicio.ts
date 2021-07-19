import { ingreso } from "./ingreso.model";


export class IngresoServicio{
  ingresos:ingreso []=[
    new ingreso("Salario", 1680000),
    new ingreso("Bono por desempeño", 650)
  ];


  eliminar(ingreso:ingreso){
  const indice: number = this.ingresos.indexOf(ingreso);
  this.ingresos.splice(indice,1);

  }
}
