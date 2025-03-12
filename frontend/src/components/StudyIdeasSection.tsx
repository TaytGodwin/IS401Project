import * as React from 'react';
import StudyIdea from './StudyIdea';

function StudyIdeasSection() {
  const studyIdeas = [
    {
      id: 1,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5bfd39eb2be9b02fe141c573d5a2c79265862e37affedc03bc5dc91c0130db88?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52',
      title: 'Prophetic Teachings',
      description:
        'Pair scripture reading with recent talks from General Conference.',
    },
    {
      id: 2,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/513ee34c131a408ddd51ac50e5ca5e854b26c0869026485233f53c8409c9b70c?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52',
      title: 'Character Study',
      description:
        'Study the life, choices, and faith of a prophet or disciple.',
    },
    {
      id: 3,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8215e3a89b1c9e6ae48e3c38401c423e2573c92f8d2e938a92004924cd6aeb7e?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52',
      title: 'Verse Mapping',
      description:
        'Pick a verse, break it down by keywords, definitions, and cross-references.',
    },
    {
      id: 4,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/c4fcf9b7c81e3d9fd973709e3b2b2260a3d741826578924fe32f4b922343a1b2?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52',
      title: 'Ideas for Kids',
      description:
        'Help children learn about Jesus Christ in ways they understand',
    },
  ];

  return (
    <section className="study-section">
      <h2 className="section-title">Study Ideas</h2>

      {studyIdeas.map((idea) => (
        <StudyIdea
          key={idea.id}
          image={idea.image}
          title={idea.title}
          description={idea.description}
        />
      ))}

      <style jsx>{`
        .study-section {
          display: flex;
          margin-top: 15px;
          width: 329px;
          max-width: 100%;
          padding-top: 10px;
          padding-bottom: 50px;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 700;
          text-align: center;
          justify-content: start;
        }
        .section-title {
          width: 100%;
          padding-left: 33px;
          padding-right: 33px;
          padding-top: 1px;
          padding-bottom: 20px;
          font-size: 24px;
          color: #255c99;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 1;
          margin: 0;
        }
      `}</style>
    </section>
  );
}

export default StudyIdeasSection;
