// Pruebas Jest para el patrón Prototype
import { ConcretePrototype } from './ConcretePrototype';
import { ComplexObject } from './ComplexObject';    
import { IPrototype } from './IPrototype';
import { jest } from '@jest/globals';
import { describe, test, expect } from '@jest/globals';

describe('PrototypePattern', () => {
    test('Debe clonar un objeto correctamente', () => {
      // Arrange - Creamos el objeto original
      const co1 = new ComplexObject(['dato1', 'dato2']);
      const original = new ConcretePrototype(1, 'Original', co1);
      
      // Act - Clonamos el objeto original
      const clon = original.clone() as ConcretePrototype;
      
      // Assert - Verificamos que el clon sea diferente al original
      expect(clon).not.toBe(original); // Verificar que son objetos diferentes
      expect(clon.getId()).toBe(original.getId()); // Pero con los mismos valores
      expect(clon.getName()).toBe(original.getName());
      expect(clon.getComplexObject()).not.toBe(original.getComplexObject()); // Objetos complejos diferentes
      expect(clon.getComplexObject().getData()).toEqual(original.getComplexObject().getData()); // Con los mismos datos
    });
    
    test('Modificar el clon no debe afectar al original', () => {
      // Arrange - Creamos el objeto original
      const co2 = new ComplexObject(['dato1', 'dato2']);
      const original = new ConcretePrototype(1, 'Original', co2);
      const clon = original.clone() as ConcretePrototype;
      
      // Act - Modificamos el clon
      clon.setId(2);
      clon.setName('Clon Modificado');
      clon.getComplexObject().addData('dato3');
      
      // Assert - Verificamos que el original no se modificó
      expect(original.getId()).toBe(1);
      expect(original.getName()).toBe('Original');
      expect(original.getComplexObject().getData()).toEqual(['dato1', 'dato2']);
      expect(clon.getId()).toBe(2);
      expect(clon.getName()).toBe('Clon Modificado');
      expect(clon.getComplexObject().getData()).toEqual(['dato1', 'dato2', 'dato3']);
    });
    
    test('ComplexObject debe clonarse correctamente', () => {
      // Arrange - Creamos el objeto original
      const original = new ComplexObject(['dato1', 'dato2']);
      
      // Act - Clonamos el objeto original
      const clon = original.clone();
      clon.addData('dato3');
      
      // Assert - Verificamos que el original no se modificó
      expect(original.getData()).toEqual(['dato1', 'dato2']);
      expect(clon.getData()).toEqual(['dato1', 'dato2', 'dato3']);
    });
  });