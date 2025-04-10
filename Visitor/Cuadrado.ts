import { IFigura } from './IFigura';
import { IFiguraVisitor } from './IFiguraVisitor';

// Clase concreta 'Cuadrado' que implementa 'Figura'.
// El método 'aceptar' permite que un visitante actúe sobre él.
export class Cuadrado implements IFigura {

  aceptar(visitor: IFiguraVisitor): void {

    // Llama al método específico del visitante para cuadrados.
    visitor.visitarCuadrado(this);
  }
}
