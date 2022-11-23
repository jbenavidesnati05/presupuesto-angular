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
      // validacion cuando los campos son vacios
      if (this.nombreGasto == " " || this.cantidad <=0) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = " Nombre gasto vacio o cantidad menor o igual a cero ";
        // resetear formulario
        this.nombreGasto = " ";
        this.cantidad =  0;
        // validacion cuando el gasto es mayor al restante
        }else if(this.cantidad > this._presupuestoService.restante ){
          this.textIncorrecto = "Cantidad ingresada en mayor a restante"
          this.formularioIncorrecto = true;
          console.log(this.cantidad);
          return  
      }else{
        this.formularioIncorrecto = false;
        // creamos obejto
        const GASTO ={
          nombre: this.nombreGasto,
          cantidad:this.cantidad
        }

        // enviamos en objeto a los suscriptores via subject
        this._presupuestoService.agregarGasto(GASTO);
      }

      }
  }


