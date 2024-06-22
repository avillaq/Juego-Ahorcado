import { Component } from '@angular/core';
import { PalabrasService } from "../palabras.service"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
  listaPalabras:string[] = [];
  palabraAleatoria:string = "";
  palabraUsuario:string[] = []

  letraUsuario:string = ""

  intentos = 6;

  acierto= false;

  juegoTerminado = false;

  constructor(private palabras: PalabrasService){
    this.listaPalabras = palabras.getPalabras();
    this.palabraAleatoria = this.listaPalabras[Math.floor(Math.random()*4)]

    for (let i = 0; i < this.palabraAleatoria.length; i++) {
      this.palabraUsuario.push("_")
    }
  }

  ingresarLetra(){
    this.acierto= false;

    for (let i = 0; i < this.palabraAleatoria.length; i++) {
      if (this.letraUsuario === this.palabraAleatoria.charAt(i)) {
        this.palabraUsuario[i] = this.letraUsuario;
        this.acierto= true;
        
        if (this.palabraUsuario.join("")===this.palabraAleatoria) {
          console.log("GANASTEEE!!")
          this.juegoTerminado = true;
        }
      
      }
       
    }
    if (!this.acierto){
      this.intentos--;
    }
    if (this.intentos === 0) {
      console.log("PERDISTEE!!")
      this.juegoTerminado = true;
    }
    
    this.letraUsuario = ""
  }

}
