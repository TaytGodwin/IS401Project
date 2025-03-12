import * as React from 'react';

export const WelcomeMessage: React.FC = () => {
  return (
    <section className="welcome-container">
      <h1 className="welcome-text">Welcome to Notable!</h1>
      <style jsx>{`
        .welcome-container {
          color: #255c99;
          font-size: 27px;
          font-family: Roboto;
          text-align: center;
          line-height: 22px;
          width: 100%;
          background-color: #fff;
          border-radius: 8px;
          border-width: 1px;
          border-color: #255c99;
          padding: 20px;
        }
        .welcome-text {
          margin: 0;
          font-size: inherit;
          color: inherit;
        }
      `}</style>
    </section>
  );
};
