import { Component, OnInit } from '@angular/core';
import { Resultados } from '../clases/resultados';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(){

  }
  
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
