'use client';
import * as React from 'react';
import ChatHeader from './ChatHeader';
import GroupInfo from './GroupInfo';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatInterface: React.FC = () => {
  return (
    <div className="chat-container">
      <ChatHeader />
      <main className="chat-content">
        <GroupInfo
          avatarUrl="https://placehold.co/78x71/255C99/255C99"
          groupName="Book Club"
        />
        <ChatMessages />
      </main>
      <ChatInput />

      <style jsx>{`
        .chat-container {
          width: 100%;
          min-height: 100vh;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }

        .chat-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 34px 16px;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
