import * as React from 'react';

interface MessageBubbleProps {
  text: string;
  type: 'sent' | 'received';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, type }) => {
  return (
    <p className={`message-bubble ${type}`}>
      {text}

      <style jsx>{`
        .message-bubble {
          padding: 20px;
          border-radius: 100px;
          box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.25);
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto, sans-serif;
        }

        .received {
          color: #000;
          background-color: #b0b7c3;
        }

        .sent {
          color: #fff;
          background-color: #255c99;
        }
      `}</style>
    </p>
  );
};

export default MessageBubble;
