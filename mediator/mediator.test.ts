import { ChatRoom, User } from './mediator';

describe('Patrón Mediator (ChatRoom)', () => {
  it('debería enviar un mensaje a través del mediador', () => {
    const chatRoom = new ChatRoom();
    const user1 = new User('Ramiro', chatRoom);
    const user2 = new User('Rodrigo', chatRoom);

    user1.send('Tanto tiempo Rodrigo');
    expect(chatRoom.messages).toContain('[Ramiro] dice: Tanto tiempo Rodrigo');

    user2.send('Cuando un lol pa?');
    expect(chatRoom.messages).toContain('[Rodrigo] dice: Cuando un lol pa?');




  });
});
