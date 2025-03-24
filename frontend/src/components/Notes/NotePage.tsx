'use client';
import React from 'react';
import SearchBar from './SearchBar';
import NoteCard from './NoteCard';
import FloatingActionButton from './FloatingActionButton';

const NotableApp: React.FC = () => {
  // Note data
  const notes = [
    {
      title: 'Charity',
      tags: ['Family', 'Love'],
      content:
        "Charity isn't just about grand gestures—it's about being willing to see and serve others, just as Christ would. This week, I'm challenging myself to be more intentional in showing charity. Maybe it's checking in on a friend, being patient in a frustrating situation, or offering a sincere compliment.",
    },
    {
      title: 'Temples',
      tags: ['Family', 'Jesus'],
      content:
        'President Nelson taught that regular temple worship brings revelation, peace, and spiritual protection. He emphasized that the temple strengthens our testimony of Jesus Christ like nothing else can.',
    },
    {
      title: 'Service',
      tags: ['Personal'],
      content:
        "Serving others is a direct way to serve God. No act of kindness is too small—whether it's helping a friend, listening, or offering encouragement. When I focus on serving with love, I feel closer to Him.\n\nHow can I be more intentional in serving this week?",
    },
    {
      title: 'Repentance',
      tags: ['Jesus'],
      content:
        "I can turn to Him not just when I need forgiveness, but when I feel alone, overwhelmed, or broken. His grace isn't just about overcoming sin—it's about healing, enabling, and lifting me in every moment of my life.\n\nHow can I better rely on His Atonement today?",
    },
  ];

  return (
    <main className="app-container">
      <section className="content-section">
        <SearchBar />
        <div className="notes-container">
          {notes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              tags={note.tags}
              content={note.content}
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
