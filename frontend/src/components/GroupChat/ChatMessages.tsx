import * as React from 'react';
import MessageBubble from './MessageBubble';

interface ChatMessagesProps {
  showSentMessage: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ showSentMessage }) => {
  return (
    <section className="messages-container">
      <div className="message-group">
        <span className="sender-name">Jack</span>
        <MessageBubble
          text='I like this verse I read this morning, wanted to share... "Adam fell that men might be; and men are, that they might have joy."'
          type="received"
        />
      </div>

      <div className="message-group">
        <span className="sender-name">Jill</span>
        <MessageBubble
          text="2nd Nephi right? One of my favorites!"
          type="received"
        />
      </div>

      <div className="message-group">
        <span className="sender-name">Jane</span>
        <MessageBubble
          text="No matter what comes your way in the new week, you can find meaning and joy in it"
          type="received"
        />
      </div>

      {showSentMessage && (
        <div className="sent-message-container">
          <MessageBubble
            text="That is very inspiring, thanks for sharing!"
            type="sent"
          />
        </div>
      )}

      <style jsx>{`
        .messages-container {
          width: 100%;
          margin-top: 45px;
          display: flex;
          flex-direction: column;
          gap: 47px;
          padding-bottom: 80px;
        }

        .message-group {
          display: flex;
          flex-direction: column;
        }

        .sender-name {
          color: #000;
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto, sans-serif;
          margin-bottom: 10px;
        }

        .sent-message-container {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </section>
  );
};

export default ChatMessages;
