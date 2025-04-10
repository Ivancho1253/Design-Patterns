import { IFiguraVisitor } from './IFiguraVisitor';
import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';

// Clase que implementa 'IFiguraVisitor'.
// Define cómo se dibuja un círculo o un cuadrado.

export class DibujarVisitor implements IFiguraVisitor {
  visitarCirculo(c: Circulo): void {
    console.log('🟢 Dibujando un círculo');
  }

  visitarCuadrado(c: Cuadrado): void {
    console.log('🟦 Dibujando un cuadrado');
  }
}
