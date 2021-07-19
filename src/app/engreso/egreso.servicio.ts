import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egresos:Egreso[] = [
    new Egreso ("Dividendo",260000),
    new Egreso ("Mercaderia",45000),
    new Egreso( "Parcela",480000 )
  ];

  eliminarEgreso(gasto:Egreso){
    const indiceGasto: number = this.egresos.indexOf(gasto);
    this.egresos.splice(indiceGasto,1);
    }
}
