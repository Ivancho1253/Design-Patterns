// sum.test.ts
import { sum } from './sum';

describe('Prueba básica de suma', () => {
    
  test('suma 2 + 3 debe dar 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('suma 0 + 0 debe dar 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});