import { IPrototype } from "./IPrototype";

//Clase que representa un objeto complejo que también implementa Prototype
export class ComplexObject implements IPrototype {
  private data: string[];

  constructor(data: string[]) {
    this.data = [...data]; // Copia del array
  }

  clone(): ComplexObject {
    return new ComplexObject([...this.data]);
  }

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[] {
    return [...this.data]; // Retornamos una copia para evitar modificaciones externas
  }

  toString(): string {
    return this.data.join(', ');
  }
}