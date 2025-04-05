import { ChatRoom, User } from './mediator';

describe('Patrón Mediator (ChatRoom)', () => {
  it('debería enviar un mensaje a través del mediador', () => {
    const chatRoom = new ChatRoom();
    const user1 = new User('Alice', chatRoom);

    user1.send('¡Hola Mundo!');
  });
});
