import * as React from 'react';

const ChatHeader: React.FC = () => {
  return (
    <header className="header">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/433cb33ac676ae72c09a2bfb7a1da9bf074eabb6"
        alt="Notable"
        className="logo"
      />

      <style jsx>{`
        .header {
          width: 100%;
          height: 96px;
          background-color: #f4f4f4;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .logo {
          height: 30px;
          width: auto;
        }
      `}</style>
    </header>
  );
};

export default ChatHeader;
