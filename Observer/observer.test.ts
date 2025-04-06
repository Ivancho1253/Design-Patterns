import { Subject, Observer } from './observer';

describe('Ejemplo de Patron de diseño Observer', () => {
  test('debe notificar a los observadores suscritos', () => {
    const subject = new Subject();

    const observer: Observer = {
      update: jest.fn(),
    };

    subject.subscribe(observer);
    subject.notify('Gracias por la sub wacho!');

    expect(observer.update).toHaveBeenCalledWith('Gracias por la sub wacho!');
  });

  test('no debe notificar a los observadores desuscritos', () => {
    const subject = new Subject();

    const observer: Observer = {
      update: jest.fn(),
    };

    subject.subscribe(observer);
    subject.unsubscribe(observer);
    subject.notify('porque te desuscribiste wachin');

    expect(observer.update).not.toHaveBeenCalled();
  });
});
