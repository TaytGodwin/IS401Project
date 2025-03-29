import React, { useState, useEffect } from 'react';
interface Note {
  noteId: number;
  noteTitle: string;
  noteContent: string;
}
interface ChatInputProps {
  setShowSentMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput: React.FC<ChatInputProps> = ({ setShowSentMessage }) => {
  const [message, setMessage] = React.useState('');
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const notes: Note[] = [
    {
      noteId: 1,
      noteTitle: 'Charity',
      noteContent: 'Today I read about charity and how it is good for us',
    },
    {
      noteId: 2,
      noteTitle: 'Joseph Smith and Revelation',
      noteContent: 'We need to pray with faith and not out of hopelessness.',
    },
    {
      noteId: 3,
      noteTitle: 'Doctrine and Covenants 23',
      noteContent: 'God does care about me',
    },
    {
      noteId: 4,
      noteTitle: 'The Atonement Talk',
      noteContent:
        'I spoke today and loves being able to talk about Christ and His Atonement!',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowSentMessage(true); // Show the hidden message
      setMessage('');
    }
  };

  const handleNoteSelection = (noteContent: string) => {
    setMessage(noteContent); // Set the selected note content to the message input
    setShowModal(false); // Close the modal
  };

  return (
    <footer className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="message-input"
          placeholder="Type Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Type a message"
        />
        <button
          className="send-button"
          onClick={handleSendMessage}
          aria-label="Send message"
        >
          <svg
            width="24"
            height="24"
            viewBox="2 2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="send-button"
          onClick={() => setShowModal(true)} // Open the modal
        >
          <svg
            width="24"
            height="24"
            viewBox="2 2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M5 12H19"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select a Note</h3>
            <ul>
              {notes.map((note) => (
                <li
                  key={note.noteId}
                  onClick={() => handleNoteSelection(note.noteContent)}
                >
                  {note.noteTitle}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .input-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background-color: #fff;
          z-index: 10;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .message-input {
          color: #255c99;
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto, sans-serif;
          flex: 1;
          height: 37px;
          border-radius: 20px;
          border: 1px solid #255c99;
          padding: 0 16px;
          outline: none;
        }

        .send-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #255c99;
          border-radius: 6px;
          border: 1px solid #255c99;
          cursor: pointer;
          padding: 0;
        }

        .attach-note-button {
          background-color: #255c99;
          color: white;
          border-radius: 6px;
          padding: 10px 20px;
          margin-top: 8px;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Overlay background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; /* Ensures modal is on top */
        }

        .modal-content {
          background-color: #255c99; /* Blue background for the modal */
          padding: 20px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .modal-content h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: white;
        }

        .modal-content ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .modal-content li {
          padding: 10px;
          cursor: pointer;
          color: white; /* Text color inside the modal */
        }

        .modal-content li:hover {
          background-color: #f1f1f1;
        }

        .modal-content button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .modal-content button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </footer>
  );
};

export default ChatInput;
