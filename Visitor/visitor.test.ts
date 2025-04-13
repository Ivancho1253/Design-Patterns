import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';
import { IFiguraVisitor } from './IFiguraVisitor';

///////////////////////////////////////////////////////////

//Realizamos el test correspondiente al patrón Visitor
describe('Patrón Visitor', () => {
  test('debería llamar a los métodos correctos del visitor', () => {

    // Creamos un visitante falso con jest.fn()
    const fakeVisitor: IFiguraVisitor = {
      visitarCirculo: jest.fn(),
      visitarCuadrado: jest.fn(),
    };

    //Creamos las figuras/objetos.
    const circulo = new Circulo();
    const cuadrado = new Cuadrado();

    // Ejecutamos aceptar, que debe llamar al visitante correspondiente
    circulo.aceptar(fakeVisitor);
    cuadrado.aceptar(fakeVisitor);

    // Verificamos que los métodos correctos fueron llamados
    expect(fakeVisitor.visitarCirculo).toHaveBeenCalledWith(circulo);
    expect(fakeVisitor.visitarCuadrado).toHaveBeenCalledWith(cuadrado);
    
    // Verificamos que los métodos fueron llamados una sola vez 
    expect(fakeVisitor.visitarCuadrado).toHaveBeenCalledTimes(1);
    expect(fakeVisitor.visitarCirculo).toHaveBeenCalledTimes(1);
  });
});
