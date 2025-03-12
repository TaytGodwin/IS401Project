import * as React from 'react';
import NoteCard from './NoteCard';

const NotesList: React.FC = () => {
  const notes = [
    {
      id: 1,
      title: 'Charity',
      content:
        "Charity isn't just about grand gestures—it's about being willing to see and serve others, just as Christ would. This week, I'm challenging myself to be more intentional in showing charity. Maybe it's checking in on a friend, being patient in a frustrating situation, or offering a sincere compliment.",
      tags: ['Family', 'Love'],
    },
    {
      id: 2,
      title: 'Temples',
      content:
        'President Nelson taught that regular temple worship brings revelation, peace, and spiritual protection. He emphasized that the temple strengthens our testimony of Jesus Christ like nothing else can.',
      tags: ['Family', 'Jesus'],
    },
    {
      id: 3,
      title: 'Service',
      content:
        "Serving others is a direct way to serve God. No act of kindness is too small—whether it's helping a friend, listening, or offering encouragement. When I focus on serving with love, I feel closer to Him.\nHow can I be more intentional in serving this week?",
      tags: ['Personal'],
    },
    {
      id: 4,
      title: 'Repentance',
      content:
        "I can turn to Him not just when I need forgiveness, but when I feel alone, overwhelmed, or broken. His grace isn't just about overcoming sin—it's about healing, enabling, and lifting me in every moment of my life.\nHow can I better rely on His Atonement today?",
      tags: ['Jesus'],
    },
  ];

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          tags={note.tags}
        />
      ))}
      <style react-jsx>{`
        .notes-list {
          position: absolute;
          z-index: 0;
          display: flex;
          width: 355px;
          max-width: 100%;
          padding: 95px 13px 48px;
          flex-direction: column;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          left: 50%;
          bottom: -426px;
          transform: translate(-50%, 0%);
          height: 1198px;
        }
      `}</style>
    </section>
  );
};

export default NotesList;
