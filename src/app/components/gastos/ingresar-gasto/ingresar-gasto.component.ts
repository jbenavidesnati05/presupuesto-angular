import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../service/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
    nombreGasto:string;
    cantidad:number;
    formularioIncorrecto:boolean;
    textIncorrecto:string;

    constructor(private _presupuestoService:PresupuestoService) {
      this.nombreGasto ="";
      this.cantidad =0;
      this.formularioIncorrecto = false;
      this.textIncorrecto =" ";
    }

    ngOnInit(): void {
    }
    agregarGasto() {


      // validacion cuando el gasto es mayor al restante
      if (this.cantidad > this._presupuestoService.restante) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = "Cantidad ingresada en mayor a restante"
        console.log(this.cantidad);
        return
      }
      // validacion cuando los campos son vacios
      if (this.nombreGasto === " " || this.cantidad <=0) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = "Cantidad ingresada en mayor a restante";
      }else{


      }

        // creamos obejto
        const GASTO ={
          nombre: this.nombreGasto,
          cantidad:this.cantidad
        }

        // enviamos en objeto a los suscriptores via subject
        this._presupuestoService.agregarGasto(GASTO);

        // resetear formulario
        this.formularioIncorrecto = false;
        this.nombreGasto = " ";
        this.cantidad = 0;
      }
  }


