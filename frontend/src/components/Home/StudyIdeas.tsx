import React from 'react';

const studyResources = [
  {
    title: 'Prophetic Teachings',
    description:
      'Pair scripture reading with recent talks from General Conference.',
    link: 'https://www.churchofjesuschrist.org/study/general-conference/speakers/russell-m-nelson?lang=eng',
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/67d7971aca8411eeb610eeeeac1e5c736777cd3a/full/%21500%2C/0/default', // Image URL for Prophetic Teachings
  },
  {
    title: 'Temple & Family History',
    description: 'Study the life, choices, and faith of a prophet or disciple.',
    link: 'https://www.churchofjesuschrist.org/study/temple-and-family-history?lang=eng',
    imageUrl:
      'https://www.churchofjesuschrist.org/bc/content/ldsorg/content/images/landing-page-history-of-temples-nauvoo-20110307.jpg', // Image URL for Temple & Family History
  },
  {
    title: 'Come Follow Me',
    description:
      'The Come, Follow Me study manual is the study guide provided by the Church for the current year.',
    link: 'https://www.churchofjesuschrist.org/study/come-follow-me?lang=eng',
    imageUrl:
      'https://content.churchofjesuschrist.org/acp/bc/cp/Europe/United%20Kingdom/come-follow-me/1200x675/14-easter-del-parson-christ-apostles.jpg', // Image URL for Come Follow Me
  },
  {
    title: 'Ideas for Kids',
    description:
      'Help children learn about Jesus Christ in ways they understand.',
    link: 'https://www.churchofjesuschrist.org/study/children?lang=eng',
    imageUrl:
      'https://newsroom.churchofjesuschrist.org/media/960x540/780ca0fa93e883f6fd469c79acb6cfb990953875.png', // Image URL for Ideas for Kids
  },
];

const StudyLinks = () => {
  return (
    <div className="study-links-container">
      {studyResources.map((resource, index) => (
        <a
          key={index}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="study-link"
        >
          <div className="study-card">
            <img
              src={resource.imageUrl}
              alt={resource.title}
              className="study-image"
            />
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        </a>
      ))}

      <style jsx>{`
        .study-links-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .study-link {
          text-decoration: none;
          color: inherit;
        }

        .study-card {
          padding: 16px;
          border-radius: 8px;
          background-color: #2c7abf;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition:
            background-color 0.3s ease-in-out,
            transform 0.2s ease-in-out;
        }

        .study-card:hover {
          background-color: #255c99;
          color: white; /* Ensures text remains readable */
          transform: scale(1.10);
        }

        .study-image {
          width: 100%;
          height: 180px; /* Adjust the height to make the images smaller */
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default StudyLinks;
