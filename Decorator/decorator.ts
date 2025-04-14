export interface Character {
  getDescription(): string;
}

export class Guerrero implements Character {
  getDescription(): string {
    return "Guerrero";
  }
}

export abstract class EquipamientoDecorador implements Character {
  protected character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  abstract getDescription(): string;
}

export class CascoDecorador extends EquipamientoDecorador {
  getDescription(): string {
    return this.character.getDescription() + " con casco";
  }
}

export class ArmaduraDecorador extends EquipamientoDecorador {
  getDescription(): string {
    return this.character.getDescription() + " con armadura";
  }
}