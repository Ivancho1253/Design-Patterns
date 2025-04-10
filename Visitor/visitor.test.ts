import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';
import { IFiguraVisitor } from './IFiguraVisitor';

describe('Patrón Visitor', () => {
  test('debería llamar a los métodos correctos del visitor', () => {

    // Creamos un visitante falso con jest.fn()
    const mockVisitor: IFiguraVisitor = {
      visitarCirculo: jest.fn(),
      visitarCuadrado: jest.fn(),
    };

    const circulo = new Circulo();
    const cuadrado = new Cuadrado();

    // Ejecutamos aceptar, que debe llamar al visitante correspondiente
    circulo.aceptar(mockVisitor);
    cuadrado.aceptar(mockVisitor);

    // Verificamos que los métodos correctos fueron llamados
    expect(mockVisitor.visitarCirculo).toHaveBeenCalledWith(circulo);
    expect(mockVisitor.visitarCuadrado).toHaveBeenCalledWith(cuadrado);
  });
});
