import {ChatEngine} from 'react-chat-engine';
import './index.css';
import { ChatFeed } from './componentd/ChatFeed';
import React from 'react'

const App = () => {
  return (
    <ChatEngine
    height='100vh'
    projectID='042cb9fa-6c09-4f12-9ba4-4f9c6b267927'
    userName = 'Malithi'
    userSecret ='123'
    renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps } />}
  />
  );
}

export default App



