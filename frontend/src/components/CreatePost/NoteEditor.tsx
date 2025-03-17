'use client';
import React, { useState } from 'react';
import ActionButton from './ActionButton';

const NoteEditor = () => {
  const [title, setTitle] = useState('Charity');
  const [content, setContent] = useState(
    'Today, I studied Moroni 7:47: "But charity is the pure love of Christ, and it endureth forever..." I realized that charity isn\'t just about giving—it\'s about seeing others as Christ does. When I focus on love first, my actions naturally follow.'
  );

  return (
    <section className="editor-container2">
      <div className="editor-header2">
        <div className="drag-indicator2" />
      </div>

      <input
        type="text"
        className="note-title2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />

      <textarea
        className="note-content2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />

      <div className="action-buttons2">
        <ActionButton>
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tag-icon"
          >
            <path
              d="M11.0833 10.5H11.0991M32.6008 20.115L21.2483 30.87C20.9542 31.1489 20.6049 31.3702 20.2205 31.5212C19.8361 31.6722 19.424 31.7499 19.0079 31.7499C18.5917 31.7499 18.1797 31.6722 17.7952 31.5212C17.4108 31.3702 17.0616 31.1489 16.7675 30.87L3.16663 18V3H19L32.6008 15.885C33.1906 16.4471 33.5216 17.2074 33.5216 18C33.5216 18.7926 33.1906 19.5529 32.6008 20.115Z"
              stroke="#F5F5F5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ActionButton>

        <ActionButton>
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="share-icon"
          >
            <path
              d="M6.33337 18V30C6.33337 30.7957 6.667 31.5587 7.26087 32.1213C7.85473 32.6839 8.66019 33 9.50004 33H28.5C29.3399 33 30.1453 32.6839 30.7392 32.1213C31.3331 31.5587 31.6667 30.7957 31.6667 30V18M25.3334 9L19 3M19 3L12.6667 9M19 3L19 22.5"
              stroke="#F5F5F5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ActionButton>
      </div>

      <style jsx>{`
        .editor-container2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 723px;
          background-color: #b0b7c3;
          border-radius: 28px;
          box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
            0px 1px 3px 0px rgba(0, 0, 0, 0.3);
          margin-top: 33px;
        }
        .editor-header2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 16px;
          gap: 12px;
        }
        .drag-indicator2 {
          width: 32px;
          height: 4px;
          border-radius: 100px;
          background-color: #255c99;
        }
        .note-title2 {
          width: 261px;
          height: 48px;
          color: #255c99;
          font-size: 27px;
          font-family: Roboto, sans-serif;
          border-radius: 8px;
          border-width: 1px;
          border-color: #255c99;
          background-color: #fff;
          margin-top: 24px;
          text-align: center;
          padding: 8px;
        }
        .note-content2 {
          color: #255c99;
          text-align: center;
          font-family: Roboto, sans-serif;
          font-size: 20px;
          line-height: 1.5;
          width: 320px;
          height: 344px;
          border-radius: 10px;
          border-width: 1px;
          border-color: #255c99;
          background-color: #fff;
          margin-top: 26px;
          padding: 16px;
          resize: none;
        }
        .action-buttons2 {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding-left: 24px;
          padding-right: 24px;
          margin-top: 195px;
        }
        .tag-icon,
        .share-icon {
          width: 38px;
          height: 36px;
        }
      `}</style>
    </section>
  );
};

export default NoteEditor;
