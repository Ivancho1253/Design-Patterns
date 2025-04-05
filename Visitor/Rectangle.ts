// Visitor/shapes/Rectangle.ts

import { Visitor } from './IVisitor';
import { Visitable } from './IVisitable';

export class Rectangle implements Visitable {
  constructor(public width: number, public height: number) {}

  accept(visitor: Visitor): void {
    visitor.visitRectangle(this);
  }
}
