'use client';
import * as React from 'react';
import { StyledInput } from './StyledInput';

export const LoginForm: React.FC = () => {
  return (
    <form className="login-form">
      <h2 className="login-title">Login</h2>
      <div className="inputs-container">
        <StyledInput type="text" placeholder="Username/Email" />
        <StyledInput type="password" value="*******" />
      </div>
      <div className="links-container">
        <a href="#" className="link">
          New User? Create an Account
        </a>
        <a href="#" className="link">
          Forgot Password?
        </a>
      </div>
      <style jsx>{`
        .login-form {
          width: 90%;
          background-color: #255c99;
          border-radius: 8px;
          border-width: 1px;
          border-color: #255c99;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .login-title {
          color: #fff;
          font-size: 27px;
          font-family: Roboto;
          text-align: center;
          line-height: 22px;
          margin: 0;
        }
        .inputs-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .links-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .link {
          color: #fff;
          font-size: 13px;
          font-family: Roboto;
          text-align: center;
          line-height: 22px;
          text-decoration: none;
        }
      `}</style>
    </form>
  );
};
