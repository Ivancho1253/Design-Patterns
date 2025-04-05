import { Circle } from '../Visitor/Circle';
import { Rectangle } from '../Visitor/Rectangle';
import { AreaCalculator } from '../Visitor/AreaCalculator';
import { Visitable } from '../Visitor/IVisitable';

const shapes: Visitable[] = [
  new Circle(5),
  new Rectangle(4, 6)
];

const calculator = new AreaCalculator();

for (const shape of shapes) {
  shape.accept(calculator);
}