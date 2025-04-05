// Interface para los objetos que pueden ser clonados
export interface IPrototype {
    clone(): IPrototype;
  }