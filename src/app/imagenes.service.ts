import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  // Imagenes del ahorcado
  private imagenes: string[] = ['../assets/img/1.png', '../assets/img/2.png', '../assets/img/3.png', '../assets/img/4.png', '../assets/img/5.png', '../assets/img/6.png'];
}
