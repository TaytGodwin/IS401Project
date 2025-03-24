import React from 'react';
import StudyCard from './StudyCard';

const StudyIdeas: React.FC = () => {
  const studyIdeas = [
    {
      title: 'Prophetic Teachings',
      description:
        'Pair scripture reading with recent talks from General Conference.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Character Study',
      description:
        'Study the life, choices, and faith of a prophet or disciple.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Verse Mapping',
      description:
        'Pick a verse, break it down by keywords, definitions, and cross-references.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Ideas for Kids',
      description:
        'Help children learn about Jesus Christ in ways they understand',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="study-ideas">
      {studyIdeas.map((idea, index) => (
        <StudyCard
          key={index}
          title={idea.title}
          description={idea.description}
          imageUrl={idea.imageUrl}
        />
      ))}
      <style jsx>{`
        .study-ideas {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default StudyIdeas;
