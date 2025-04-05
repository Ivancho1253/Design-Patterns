import { ChatRoom, User } from './mediator';

describe('Patrón Mediator (ChatRoom)', () => {
  it('debería enviar un mensaje a través del mediador', () => {
    const chatRoom = new ChatRoom();
    const user1 = new User('Ramiro', chatRoom);
    const user2 = new User('Rodrigo', chatRoom);

    user1.send('Tanto tiempo Rodrigo');

  });
});
