import { IFigura } from './IFigura';
import { IFiguraVisitor } from './IFiguraVisitor';

// Clase concreta 'Circulo' que implementa 'Figura'.
// El método 'aceptar' permite que un visitante actúe sobre él.

export class Circulo implements IFigura {
  
  aceptar(visitor: IFiguraVisitor): void {

    // Llama al método específico del visitante para círculos.
    visitor.visitarCirculo(this);
  }
}
