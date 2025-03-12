import * as React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <button className="floating-button">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/752ea9b40c5c5420d38132495e247243022e6cada37900b306ed5156fd237816?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
        className="button-icon"
      />
      <style react-jsx>{`
        .floating-button {
          border-radius: 100px;
          background-color: rgba(37, 92, 153, 1);
          box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 50px;
          width: 114px;
          max-width: 100%;
          padding: 7px 12px;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          justify-content: center;
          right: 19px;
          bottom: 17px;
          height: 50px;
          border: none;
          cursor: pointer;
        }
        .button-icon {
          aspect-ratio: 1.06;
          object-fit: contain;
          object-position: center;
          width: 38px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
        }
      `}</style>
    </button>
  );
};

export default FloatingActionButton;
