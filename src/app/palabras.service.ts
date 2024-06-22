import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
  // Palabras relacionadas con la programacion 
  private palabras: string[] = ['programacion', 'javascript', 'typescript', 'angular', 'nodejs', 'express', 'mysql', 'python', 'java', 'perl','android', 'windows', 'linux'];

  getPalabras(){
    return this.palabras;
  }

}
