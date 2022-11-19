import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/service/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  // presupuesto = 0;

  constructor(public _presupuestoService:PresupuestoService,
              private router:Router) { }

  ngOnInit(): void {
    // this.presupuesto = this._presupuestoService.presupuesto;
    console.log(this._presupuestoService.presupuesto);
    // para redireccionar a una pagina si algo se requiere 
    if(this._presupuestoService.presupuesto ===0){
      this.router.navigate(['/ingresarPresupuesto'])
    }else{

    }
  }

}
