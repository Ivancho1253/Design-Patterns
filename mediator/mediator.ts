import { User } from './User';
export class ChatRoom {
    public messages: string[] = []; 
  
    sendMessage(message: string, user: User) {
      const formatted = `[${user.name}] dice: ${message}`;
      this.messages.push(formatted); //guardamos el mensaje
    }
  }
  
  