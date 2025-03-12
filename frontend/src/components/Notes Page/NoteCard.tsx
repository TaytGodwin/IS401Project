import * as React from 'react';
import TagComponent from './TagComponent';

interface NoteCardProps {
  title: string;
  content: string;
  tags: string[];
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content, tags }) => {
  return (
    <article className="note-card">
      <div className="note-content">
        <div className="note-header">
          <h2 className="note-title">{title}</h2>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <TagComponent key={index} text={tag} />
            ))}
          </div>
        </div>
        <p className="note-preview">{content}</p>
      </div>
      <style react-jsx>{`
        .note-card {
          border-radius: 15px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: rgba(237, 237, 237, 1);
          border-style: solid;
          border-width: 1px;
          margin-top: 17px;
        }
        .note-content {
          border-radius: 15px;
          background-color: rgba(37, 92, 153, 1);
          width: 100%;
          padding: 17px 16px;
        }
        .note-header {
          display: flex;
          width: 100%;
          align-items: stretch;
          gap: 20px;
          font-weight: 700;
          white-space: nowrap;
          justify-content: space-between;
        }
        .note-title {
          color: #f5f5f5;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 16px;
          font-weight: 700;
        }
        .tags-container {
          display: flex;
          align-items: stretch;
          gap: 8px;
          color: #fff;
        }
        .note-preview {
          color: #f5f5f5;
          text-align: center;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin-top: 10px;
        }
      `}</style>
    </article>
  );
};

export default NoteCard;
