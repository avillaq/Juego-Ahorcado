import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
  // Palabras relacionadas con la programacion 
  private palabras: string[] = ['programacion', 'javascript', 'typescript', 'angular', 'nodejs', 'express', 'mysql', 'php', 'python', 'java', 'perl','android', 'windows', 'linux'];

  getPalabras(){
    return this.palabras;
  }

}
