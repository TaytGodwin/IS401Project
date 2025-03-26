'use client';
import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import FloatingActionButton from './FloatingActionButton';
import { Note } from '../../types/Note';
import SearchBar from './SearchBar';

const NotableApp: React.FC = () => {
  const [noteData, setNoteData] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          'https://localhost:5000/api/Note/AllNotes/1'
        );
        const data = await response.json();
        setNoteData(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);
  console.log(noteData);

  return (
    <main className="app-container">
      <section className="content-section">
        <SearchBar />
        <div className="notes-container">
          {noteData.map((note, index) => (
            <NoteCard
              key={note.noteId}
              title={note.noteTitle}
              tags={note.tags}
              content={note.noteContent}
            />
          ))}
        </div>
      </section>
      <FloatingActionButton />

      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background-color: #fff;
          font-family: Roboto, sans-serif;
        }

        .content-section {
          display: flex;
          flex-direction: column;
          padding: 8px;
          padding-top: 16px;
          padding-bottom: 16px;
          gap: 16px;
        }

        .notes-container {
          display: flex;
          flex-direction: column;
          gap: 17px;
          padding: 13px;
        }
      `}</style>
    </main>
  );
};

export default NotableApp;
