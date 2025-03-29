import React, { useEffect, useState } from 'react';
import { Note } from '../../types/Note';

interface NoteSelectorModalProps {
  userId: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectNote: (noteContent: string) => void;
}

const NoteSelectorModal: React.FC<NoteSelectorModalProps> = ({
  userId,
  isOpen,
  onClose,
  onSelectNote,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch(`/api/note/allnotes/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen, userId]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {loading ? (
          <p>Loading notes...</p>
        ) : (
          <div>
            {notes.length === 0 ? (
              <p>No notes found.</p>
            ) : (
              <ul>
                {notes.map((note) => (
                  <li key={note.noteId}>
                    <button onClick={() => onSelectNote(note.noteContent)}>
                      {note.noteTitle}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteSelectorModal;
