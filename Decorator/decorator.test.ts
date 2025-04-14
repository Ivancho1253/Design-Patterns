import { Guerrero, CascoDecorador, ArmaduraDecorador } from './decorator';

describe('Personaje con equipo usando Decorator', () => {
  test('Guerrero simple', () => {
    const warrior = new Guerrero();
    expect(warrior.getDescription()).toBe("Guerrero");
  });

  test('Guerrero con casco', () => {
    const warriorWithHelmet = new CascoDecorador(new Guerrero());
    expect(warriorWithHelmet.getDescription()).toBe("Guerrero con casco");
  });

  test('Guerrero con armadura', () => {
    const warriorWithArmor = new ArmaduraDecorador(new Guerrero());
    expect(warriorWithArmor.getDescription()).toBe("Guerrero con armadura");
  });

  test('Guerrero con casco y armadura', () => {
    const fullEquipped = new ArmaduraDecorador(new CascoDecorador(new Guerrero()));
    expect(fullEquipped.getDescription()).toBe("Guerrero con casco con armadura");
  });
});