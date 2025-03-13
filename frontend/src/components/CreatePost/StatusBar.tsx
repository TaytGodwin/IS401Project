'use client';
import { StatusLevels } from './Icons';

export const StatusBar = () => {
  return (
    <header className="status-bar">
      <time className="time">9:41</time>
      <div className="status-icons">
        <StatusLevels />
      </div>
      <style jsx>{`
        .status-bar {
          height: 41px;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #255c99;
        }
        .time {
          color: #ededed;
          font-family: 'SF Pro', sans-serif;
          font-size: 17px;
          font-weight: 590;
        }
      `}</style>
    </header>
  );
};
