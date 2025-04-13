import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';

/*Interfaz del visitante. Define métodos separados
para cada tipo de figura que puede visitar.*/

export interface IFiguraVisitor {
  
  visitarCirculo(c: Circulo): void;
  visitarCuadrado(c: Cuadrado): void;
}
