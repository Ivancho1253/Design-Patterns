import { IFiguraVisitor } from './IFiguraVisitor';
import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';

// Clase que implementa 'IFiguraVisitor'.
// Define cómo se dibuja un círculo o un cuadrado.

export class DibujarFigura implements IFiguraVisitor {
  
  //Dibuje el circulo
  visitarCirculo(c: Circulo): void {
    console.log('Dibujando un círculo');
  }

  //Dibuje el cuadrado
  visitarCuadrado(c: Cuadrado): void {
    console.log('Dibujando un cuadrado');
  }
}
