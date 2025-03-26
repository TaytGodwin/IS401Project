'use client';
import React, { useState } from 'react';
import ActionButton from './NoteActionButton';
import { Navigate, useNavigate } from 'react-router-dom';

const NoteEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleTagClick = () => {
    console.log('Tag button clicked');
  };

  const handleSaveClick = async () => {
    const newNote = {
      userId: 1, // Adjust as needed
      noteTitle: title,
      noteContent: content,
      // You can omit noteDate if your DB auto-generates it
    };

    try {
      const response = await fetch('https://localhost:5000/api/Note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Note saved!', result);
        alert('Note saved successfully!');
        navigate('/notes');
      } else {
        console.error('Failed to save note:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <section className="editor-container2">
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
        <ActionButton onClick={handleTagClick}>
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

        <ActionButton onClick={handleSaveClick}>
          <svg
            width="38"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="save-icon"
          >
            <path
              d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 21V13H7V21"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 3V8H15V3"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ActionButton>
      </div>

      <style>{`
        .editor-container2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 800px;
          background-color: #b0b7c3;
          border-radius: 28px;
          box-shadow:
            0px 4px 8px 3px rgba(0, 0, 0, 0.15),
            0px 1px 3px 0px rgba(0, 0, 0, 0.3);
          margin: 32px auto;
          padding: 24px;
          box-sizing: border-box;
        }

        .note-title2 {
          width: 100%;
          max-width: 600px;
          color: #255c99;
          font-size: 27px;
          font-family: Roboto, sans-serif;
          border-radius: 8px;
          border: 1px solid #255c99;
          background-color: #fff;
          margin-top: 16px;
          text-align: center;
          padding: 12px;
          box-sizing: border-box;
        }

        .note-content2 {
          width: 100%;
          max-width: 650px;
          height: 300px;
          color: #255c99;
          font-size: 20px;
          font-family: Roboto, sans-serif;
          text-align: center;
          line-height: 1.5;
          border-radius: 10px;
          border: 1px solid #255c99;
          background-color: #fff;
          margin-top: 24px;
          padding: 16px;
          resize: none;
          box-sizing: border-box;
        }

        .action-buttons2 {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 500px;
          margin-top: 48px;
        }

        .tag-icon,
        .share-icon {
          width: 38px;
          height: 36px;
        }

        @media (max-width: 600px) {
          .note-title2 {
            font-size: 22px;
          }

          .note-content2 {
            font-size: 18px;
            height: 240px;
          }

          .action-buttons2 {
            flex-direction: column;
            gap: 16px;
            align-items: center;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default NoteEditor;
