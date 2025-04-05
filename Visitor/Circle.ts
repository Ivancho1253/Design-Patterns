// Visitor/shapes/Circle.ts

import { Visitor } from '../Visitor/IVisitor';
import { Visitable } from '../Visitor/IVisitable';

export class Circle implements Visitable {
  constructor(public radius: number) {}

  accept(visitor: Visitor): void {
    visitor.visitCircle(this);
  }
}
