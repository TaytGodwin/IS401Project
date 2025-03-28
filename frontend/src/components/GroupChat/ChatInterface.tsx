'use client';
import * as React from 'react';
import GroupInfo from './GroupInfo';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatInterface: React.FC = () => {
  const [showSentMessage, setShowSentMessage] = React.useState(false);

  return (
    <div className="chat-container">
      <main className="chat-content">
        <GroupInfo
          avatarUrl="./src/assets/allGroups/bookclub.png"
          groupName="Book Club"
        />
        <ChatMessages showSentMessage={showSentMessage} />
      </main>
      <ChatInput setShowSentMessage={setShowSentMessage} />

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
