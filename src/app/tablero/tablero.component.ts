import { Component } from '@angular/core';
import { PalabrasService } from "../palabras.service"
import { ImagenesService } from '../imagenes.service';
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

  intentos = this.imagenes.getIntentos();

  acierto= false;

  juegoTerminado = false;

  constructor(private palabras: PalabrasService, private imagenes: ImagenesService){
    this.listaPalabras = palabras.getPalabras();
    this.palabraAleatoria = this.listaPalabras[Math.floor(Math.random() * this.listaPalabras.length)];

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
      this.imagenes.setImagenActual(this.intentos);
    }
    if (this.intentos === 0) {
      console.log("PERDISTEE!!")
      this.juegoTerminado = true;
    }
    
    this.letraUsuario = ""
  }

  reiniciarJuego(){
    this.intentos = this.imagenes.getIntentos();
    this.palabraAleatoria = this.listaPalabras[Math.floor(Math.random() * this.listaPalabras.length)];
    this.palabraUsuario = []
    this.letraUsuario = ""
    for (let i = 0; i < this.palabraAleatoria.length; i++) {
      this.palabraUsuario.push("_")
    }
    this.imagenes.setImagenActual(this.intentos);
    this.juegoTerminado = false;
  }

}
