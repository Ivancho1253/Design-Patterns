import { MensajeSimple, MensajeInterrogacion, MensajePregunta } from './decorator';

describe('Ejemplo de Patron de diseño Decorador', () => {
  test('debe retornar el mensaje simple', () => {
    const mensaje = new MensajeSimple("Hola");
    expect(mensaje.getContent()).toBe("Hola");
  });

  test('debe agregar signos de exclamación usando el decorador', () => {
    const mensaje = new MensajeSimple("Hola");
    const excitedMessage = new MensajeInterrogacion(mensaje);
    expect(excitedMessage.getContent()).toBe("Hola!!!");
  });

  test('debe agregar signos de interrogación usando el decorador', () => {
    const mensaje = new MensajeSimple("Hola");
    const questionMessage = new MensajePregunta(mensaje);
    expect(questionMessage.getContent()).toBe("Hola???");
  });

  test('debe combinar múltiples decoradores', () => {
    const mensaje = new MensajeSimple("Hola");
    const excitedMessage = new MensajeInterrogacion(mensaje);
    const combinedMessage = new MensajePregunta(excitedMessage);
    expect(combinedMessage.getContent()).toBe("Hola!!!???");
  });
});
