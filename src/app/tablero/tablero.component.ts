import { Component } from '@angular/core';
import { PalabrasService } from "../palabras.service"

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
  listaPalabras:string[] = [];
  palabraAleatoria:string = "";
  palabraUsuario:string[] = []

  constructor(private palabras: PalabrasService){
    this.listaPalabras = palabras.getPalabras();
    this.palabraAleatoria = this.listaPalabras[Math.floor(Math.random()*4)]
    
    for (let i = 0; i < this.palabraAleatoria.length; i++) {
      this.palabraUsuario.push("_")
    }

  }

}
