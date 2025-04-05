// Mediador
export class ChatRoom {
    sendMessage(message: string, user: User) {
      console.log(`[${user.name}] dice: ${message}`);
    }
  }
  
  // Usuario (Colaborador)
  export class User {
    constructor(public name: string, private chatRoom: ChatRoom) {}
  
    send(message: string) {
      this.chatRoom.sendMessage(message, this);
    }
  }
  