export class ChatRoom {
    public messages: string[] = []; 
  
    sendMessage(message: string, user: User) {
      const formatted = `[${user.name}] dice: ${message}`;
      this.messages.push(formatted); //guardamos el mensaje
    }
  }
  
  export class User {
    constructor(public name: string, private chatRoom: ChatRoom) {}
  
    send(message: string) {
      this.chatRoom.sendMessage(message, this);
    }
  }
  