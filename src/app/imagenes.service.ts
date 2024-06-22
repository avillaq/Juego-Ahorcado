import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  // Imagenes del ahorcado
  public imagenes: string[] = ['../assets/img/1.png', '../assets/img/2.png', '../assets/img/3.png', '../assets/img/4.png', '../assets/img/5.png', '../assets/img/6.png'];

  tamaño = this.imagenes.length-1;
  posActual = 0;

  getIntentos(){
    return this.tamaño;
  }

  setImagenActual(pos : number){
    this.posActual = this.tamaño-pos;
  }

}
