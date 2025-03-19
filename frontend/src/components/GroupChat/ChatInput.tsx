'use client';
import * as React from 'react';

const ChatInput: React.FC = () => {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage('');
    }
  };

  return (
    <footer className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="message-input"
          placeholder="Type Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Type a message"
        />
        <button
          className="send-button"
          onClick={handleSendMessage}
          aria-label="Send message"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 9.99998 9.16675C9.53974 9.16675 9.16665 9.53984 9.16665 10.0001C9.16665 10.4603 9.53974 10.8334 9.99998 10.8334Z"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 10.8334C16.2936 10.8334 16.6666 10.4603 16.6666 10.0001C16.6666 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16665 10.8334C4.62688 10.8334 4.99998 10.4603 4.99998 10.0001C4.99998 9.53984 4.62688 9.16675 4.16665 9.16675C3.70641 9.16675 3.33331 9.53984 3.33331 10.0001C3.33331 10.4603 3.70641 10.8334 4.16665 10.8334Z"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .input-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background-color: #fff;
          z-index: 10;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .message-input {
          color: #255c99;
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto, sans-serif;
          flex: 1;
          height: 37px;
          border-radius: 20px;
          border: 1px solid #255c99;
          padding: 0 16px;
          outline: none;
        }

        .message-input::placeholder {
          color: #255c99;
        }

        .send-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #255c99;
          border-radius: 6px;
          border: 1px solid #255c99;
          cursor: pointer;
          padding: 0;
        }
      `}</style>
    </footer>
  );
};

export default ChatInput;
