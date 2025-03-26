'use client';
import * as React from 'react';
import { StyledInput } from './StyledInput';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await fetch('https://localhost:5000/loginInfo');
      const loginData = await response.json();

      const userMatch = loginData.find(
        (user: any) => user.email === username && user.password === password
      );

      if (userMatch) {
        navigate('/menu'); // if you want to redirect
      } else {
        alert('Login failed! Wrong username or password.');
      }
    } catch (error) {
      console.error('Error fetching login info:', error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>
      <div className="inputs-container">
        <StyledInput
          ref={usernameRef}
          type="text"
          placeholder="Username/Email"
        />
        <StyledInput ref={passwordRef} type="password" placeholder="*******" />
      </div>
      <div className="links-container">
        <button
          className="btn btn-light"
          style={{ backgroundColor: 'white', color: '#405b94' }}
        >
          Login
        </button>
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
