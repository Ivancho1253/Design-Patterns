// Visitor/visitor/Visitor.ts

import { Circle } from '../Visitor/Circle';
import { Rectangle } from '../Visitor/Rectangle';

export interface Visitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}
