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

  constructor(private palabras: PalabrasService){}

}
