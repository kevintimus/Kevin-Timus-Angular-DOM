import { Injectable } from '@angular/core';

export class Llibre {
  constructor(
    public titol: string,
    public tematiques: string[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class LlibreService {
  private llibre = new Llibre('El Quixot', ['Aventura', 'Clàssic', 'Fantasia']);

  obtenirLlibre() {
    return this.llibre;
  }
}

export class Text {
}
