import { IFigura } from './IFigura';
import { IFiguraVisitor } from './IFiguraVisitor';

// Clase concreta 'Circulo' que implementa 'Figura'.
// En el método 'aceptar', delega la operación al visitante.
export class Circulo implements IFigura {
  aceptar(visitor: IFiguraVisitor): void {

    // Llama al método específico del visitante para círculos.
    visitor.visitarCirculo(this);
  }
}
