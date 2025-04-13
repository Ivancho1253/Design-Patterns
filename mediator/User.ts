import { ChatRoom } from "./mediator";
export class User {
    constructor(public name: string, private chatRoom: ChatRoom) {}
  
    send(message: string) {
      this.chatRoom.sendMessage(message, this);
    }
  }