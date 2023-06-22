import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import ThierMessage from './TheirMessage'
export const ChatFeed = (props) => {
    const {chats,activeChat, userName, message} = props;

    const chat = chats && chats[activeChat];

   const renderMessages = () => {
    const keys =Object.keys(message);
       console.log(keys);
   }

  
  return (
    <div>
ChatFeed

    </div>
  )
}
