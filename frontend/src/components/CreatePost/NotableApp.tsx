'use client';
import { StatusBar } from './StatusBar';
import { Header } from './Header';
import { NoteCard } from './NoteCard';

export const NotableApp = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=SF+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <main className="app-container">
        <StatusBar />
        <Header />
        <NoteCard />
        <style jsx>{`
          .app-container {
            width: 100%;
            max-width: 393px;
            height: 852px;
            position: relative;
            font-family: 'Roboto', sans-serif;
            background-color: #fff;
          }
          @media (max-width: 991px) {
            .app-container {
              width: 100%;
              height: auto;
              min-height: 100vh;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default NotableApp;
