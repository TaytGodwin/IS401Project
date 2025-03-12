'use client';
import * as React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import NotesList from './NotesList';
import FloatingActionButton from './FloatingActionButton';

const NotesApp: React.FC = () => {
  return (
    <main className="notes-app">
      <section className="notes-container">
        <div className="top-spacer"></div>
        <Header />
        <SearchBar />
        <NotesList />
        <FloatingActionButton />
      </section>
      <style react-jsx>{`
        .notes-app {
          margin-left: auto;
          margin-right: auto;
          max-width: 480px;
          width: 100%;
          padding-bottom: 426px;
        }
        .notes-container {
          background-color: rgba(255, 255, 255, 1);
          position: relative;
          display: flex;
          min-height: 852px;
          width: 100%;
          flex-direction: column;
          align-items: start;
          justify-content: start;
        }
        .top-spacer {
          background-color: rgba(255, 255, 255, 1);
          align-self: center;
          z-index: 0;
          display: flex;
          min-height: 70px;
          width: 100%;
        }
      `}</style>
    </main>
  );
};

export default NotesApp;
