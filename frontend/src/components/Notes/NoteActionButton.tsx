import React, { ReactNode } from 'react';

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const NoteActionButton = ({ children, onClick }: ActionButtonProps) => {
  return (
    <button className="action-button" onClick={onClick}>
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

export default NoteActionButton;
