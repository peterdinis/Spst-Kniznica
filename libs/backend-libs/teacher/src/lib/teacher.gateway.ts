
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
   
  @WebSocketGateway()
  export class TeacherGateway {
    @WebSocketServer()
    server: Server;
   
    @SubscribeMessage('send_message')
    listenForMessages(@MessageBody() data: string) {
      this.server.sockets.emit('receive_message', data);
    }
  }