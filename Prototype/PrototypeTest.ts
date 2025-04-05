// Pruebas Jest
describe('Patrón Prototype', () => {
    test('Debe clonar un objeto correctamente', () => {
      // Arrange
      const complexObj = new ComplexObject(['dato1', 'dato2']);
      const original = new ConcretePrototype(1, 'Original', complexObj);
      
      // Act
      const clon = original.clone() as ConcretePrototype;
      
      // Assert
      expect(clon).not.toBe(original); // Verificar que son objetos diferentes
      expect(clon.getId()).toBe(original.getId()); // Pero con los mismos valores
      expect(clon.getName()).toBe(original.getName());
      expect(clon.getComplexObject()).not.toBe(original.getComplexObject()); // Objetos complejos diferentes
      expect(clon.getComplexObject().getData()).toEqual(original.getComplexObject().getData()); // Con los mismos datos
    });
    
    test('Modificar el clon no debe afectar al original', () => {
      // Arrange
      const complexObj = new ComplexObject(['dato1', 'dato2']);
      const original = new ConcretePrototype(1, 'Original', complexObj);
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
      // Arrange
      const original = new ComplexObject(['dato1', 'dato2']);
      
      // Act
      const clon = original.clone();
      clon.addData('dato3');
      
      // Assert
      expect(original.getData()).toEqual(['dato1', 'dato2']);
      expect(clon.getData()).toEqual(['dato1', 'dato2', 'dato3']);
    });
  });