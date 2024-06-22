import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  // Imagenes del ahorcado
  private imagenes: string[] = ['../assets/img/1.png', '../assets/img/2.png', '../assets/img/3.png', '../assets/img/4.png', '../assets/img/5.png', '../assets/img/6.png'];

  tamaño = this.imagenes.length;
  posActual = 0;

  getIntentos(){
    return this.tamaño;
  }

  getImagen(){
    return this.imagenes[this.posActual];
  }
  setImagenActual(pos : number){
    this.posActual = this.tamaño-pos;
  }

}
