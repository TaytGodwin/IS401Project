import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ActionButtonProps {
  children: ReactNode;
  to: string; // URL to navigate to
}

const ActionButton = ({ children, to }: ActionButtonProps) => {
  const navigate = useNavigate();

  return (
    <button className="action-button" onClick={() => navigate(to)}>
      {children}
      <style jsx>{`
        .action-button {
          display: flex;
          width: 114px;
          height: 50px;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          background-color: #255c99;
          box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default ActionButton;
