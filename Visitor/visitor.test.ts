// Visitor/__tests__/visitor.test.ts

import { Circle } from '../Visitor/Circle';
import { Rectangle } from '../Visitor/Rectangle';
import { AreaCalculator } from '../Visitor/AreaCalculator';
import { Visitor } from '../Visitor/IVisitor';

describe('AreaCalculator', () => {
  let consoleSpy: jest.SpyInstance;
  let calculator: Visitor;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    calculator = new AreaCalculator();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('debería calcular correctamente el área de un círculo', () => {
    const circle = new Circle(5);
    circle.accept(calculator);

    expect(consoleSpy).toHaveBeenCalledWith('Área del círculo: 78.54');
  });

  test('debería calcular correctamente el área de un rectángulo', () => {
    const rect = new Rectangle(4, 6);
    rect.accept(calculator);

    expect(consoleSpy).toHaveBeenCalledWith('Área del rectángulo: 24.00');
  });
});
