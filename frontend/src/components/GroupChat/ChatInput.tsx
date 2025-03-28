'use client';
import * as React from 'react';

interface ChatInputProps {
  setShowSentMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput: React.FC<ChatInputProps> = ({ setShowSentMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowSentMessage(true); // Show the hidden message
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
            width="24"
            height="24"
            viewBox="2 2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M5 12H19"
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
