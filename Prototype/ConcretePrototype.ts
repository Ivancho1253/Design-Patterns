// Clase concreta que implementa la interfaz Prototype
class ConcretePrototype implements Prototype {
    private id: number;
    private name: string;
    private complexObject: ComplexObject;
  
    constructor(id: number, name: string, complexObject: ComplexObject) {
      this.id = id;
      this.name = name;
      this.complexObject = complexObject;
    }
  
    // Método para clonar la instancia actual
    clone(): Prototype {
      // Creamos una copia profunda del objeto complejo
      const clonedComplexObject = this.complexObject.clone();
      
      // Retornamos una nueva instancia con los mismos valores
      return new ConcretePrototype(this.id, this.name, clonedComplexObject);
    }
  
    // Métodos para modificar y obtener propiedades
    setId(id: number): void {
      this.id = id;
    }
  
    getId(): number {
      return this.id;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  
    getComplexObject(): ComplexObject {
      return this.complexObject;
    }
  
    public toString(): string {
      return `ID: ${this.id}, Name: ${this.name}, ComplexObject: ${this.complexObject.toString()}`;
    }
  }