'use client';
import * as React from 'react';
import { StatusBar } from './StatusBar';
import { WelcomeMessage } from './WelcomeMessage';
import { LoginForm } from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <main className="login-page">
      <StatusBar />
      <div className="content-container">
        <WelcomeMessage />
        <LoginForm />
      </div>
      <style jsx>{`
        .login-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          background-color: rgb(255, 255, 255);
        }
        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          width: 100%;
          max-width: 393px;
          padding: 30px;
        }
      `}</style>
    </main>
  );
};

export default LoginPage;
