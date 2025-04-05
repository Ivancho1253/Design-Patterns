import { Visitor } from './IVisitor';

export interface Visitable {
  accept(visitor: Visitor): void;
}