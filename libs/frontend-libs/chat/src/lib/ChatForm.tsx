import React from 'react'
import {Socket} from "socket.io-client"

interface IProps {
    username: string,
    room: string, 
    socket: Socket;
}

function ChatForm({username, room, socket}: IProps) {
    const [currentMessage, setCurrentMessage] = React.useState("");
    const [messageList, setMessageList] = React.useState([]);

  return (
    <div>ChatForm</div>
  )
}

export default ChatForm