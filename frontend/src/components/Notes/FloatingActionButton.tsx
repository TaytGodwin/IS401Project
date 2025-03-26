import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingActionButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/createNote');
  };

  return (
    <div className="fab-container">
      <button className="fab-button" onClick={handleClick}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.16675 3L26.1251 8.25L28.5001 19.5L20.5834 27L8.70841 24.75L3.16675 3ZM3.16675 3L15.1779 14.379M19.0001 28.5L30.0834 18L34.8334 22.5L23.7501 33L19.0001 28.5ZM20.5834 16.5C20.5834 18.1569 19.1656 19.5 17.4167 19.5C15.6678 19.5 14.2501 18.1569 14.2501 16.5C14.2501 14.8431 15.6678 13.5 17.4167 13.5C19.1656 13.5 20.5834 14.8431 20.5834 16.5Z" stroke="#F5F5F5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
          }}
        />
      </button>

      <style jsx>{`
        .fab-container {
          position: fixed;
          bottom: 17px;
          right: 19px;
          z-index: 10;
        }

        .fab-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 114px;
          height: 50px;
          padding: 12px;
          background-color: #255c99;
          border-radius: 100px;
          box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;
