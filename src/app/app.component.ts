import { Component } from '@angular/core';
import { Resultados } from './clases/resultados';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero1:number = 0;
  numero2:number = 0;
  resultado:Resultados;
  
  constructor(){
    this.resultado = new Resultados(0,0)
  }
  Calcular(){
    this.resultado.suma = this.numero1 + this.numero2;
    this.resultado.promedio = (this.numero1 + this.numero2)/2;
  };
  Limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.Calcular();

  };  
}
