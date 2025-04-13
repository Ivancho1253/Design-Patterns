import { IFiguraVisitor } from './IFiguraVisitor';

/* Interfaz que representa cualquier figura.
 Todas las figuras deben implementar el método 'aceptar',
 que recibe un visitante.*/

export interface IFigura {
  aceptar(visitor: IFiguraVisitor): void;
}
