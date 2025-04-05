// Visitor/visitor/AreaCalculator.ts

import { Visitor } from '../Visitor/IVisitor';
import { Circle } from '../Visitor/Circle';
import { Rectangle } from '../Visitor/Rectangle';

export class AreaCalculator implements Visitor {
  visitCircle(circle: Circle): void {
    const area = Math.PI * circle.radius * circle.radius;
    console.log(`Área del círculo: ${area.toFixed(2)}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    const area = rectangle.width * rectangle.height;
    console.log(`Área del rectángulo: ${area.toFixed(2)}`);
  }
}
