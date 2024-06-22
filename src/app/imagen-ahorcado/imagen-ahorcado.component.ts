import { Component } from '@angular/core';
import { ImagenesService } from '../imagenes.service';
@Component({
  selector: 'app-imagen-ahorcado',
  standalone: true,
  imports: [],
  templateUrl: './imagen-ahorcado.component.html',
  styleUrl: './imagen-ahorcado.component.css'
})
export class ImagenAhorcadoComponent {
  constructor(private imagenes: ImagenesService){}

  urlImagen = this.imagenes.getImagen();

}
