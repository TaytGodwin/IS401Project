import React from 'react';

interface StudyCardProps {
  title: string;
  description: string;
}

const StudyCard: React.FC<StudyCardProps> = ({ title, description }) => {
  return (
    <article className="study-card">
      <div className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <style jsx>{`
        .study-card {
          border-radius: 15px;
          overflow: hidden;
          background-color: #255c99;
          color: #fff;
        }
        .card-image {
          height: 132px;
          background-color: cover;
        }
        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .card-title {
          font-size: 20px;
          font-weight: 700;
          text-decoration-line: underline;
          margin: 0;
        }
        .card-description {
          font-size: 16px;
          margin: 0;
        }
      `}</style>
    </article>
  );
};

export default StudyCard;
