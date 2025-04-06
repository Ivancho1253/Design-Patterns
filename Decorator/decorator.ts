export interface IMessage {
    getContent(): string;
  }
  
  export class MensajeSimple implements IMessage {
    constructor(private content: string) {}
    getContent(): string {
      return this.content;
    }
  }

  export class MensajeInterrogacion implements IMessage {
    constructor(private wrapped: IMessage) {}
    getContent(): string {
      return this.wrapped.getContent() + "!!!";
    }
  }
  
  export class MensajePregunta implements IMessage {
    constructor(private wrapped: IMessage) {}
    getContent(): string {
      return this.wrapped.getContent() + "???";
    }
  }
  