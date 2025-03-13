import * as React from 'react';

interface TagComponentProps {
  text: string;
  onRemove?: () => void;
}

const TagComponent: React.FC<TagComponentProps> = ({ text, onRemove }) => {
  return (
    <div className="tag-wrapper">
      <span className="tag-text">{text}</span>
      {onRemove && (
        <button onClick={onRemove} className="tag-remove-button">
          <img
            src={
              text === 'Family'
                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee80c5a1725c4960ee28ee9d2d908c41c12968dff69a2e4f43d4784c8023c1b1?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84'
                : 'https://cdn.builder.io/api/v1/image/assets/TEMP/5aa2917c88a7408453f83be9c5c40326d89789fdc23bf091e264901c2a19465d?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84'
            }
            className="tag-icon"
          />
        </button>
      )}
      <style react-jsx>{`
        .tag-wrapper {
          border-radius: 8px;
          background-color: rgba(176, 183, 195, 1);
          display: flex;
          min-height: 24px;
          padding: 3px 8px;
          align-items: center;
          gap: 8px;
          justify-content: center;
          color: #fff;
        }
        .tag-text {
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
        }
        .tag-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 0;
        }
        .tag-remove-button {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default TagComponent;
