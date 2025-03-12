import * as React from 'react';

interface StudyIdeaProps {
  image: string;
  title: string;
  description: string;
}

function StudyIdea({ image, title, description }: StudyIdeaProps) {
  return (
    <article className="study-idea">
      <div className="study-idea-content">
        <img
          src={image}
          className="study-image"
          alt={`${title} illustration`}
        />
        <h3 className="study-title">{title}</h3>
        <p className="study-description">{description}</p>
      </div>
      <style jsx>{`
        .study-idea {
          border-radius: 15px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-color: rgba(237, 237, 237, 1);
          border-style: solid;
          border-width: 1px;
          margin-top: 24px;
          width: 100%;
        }
        .study-idea-content {
          border-radius: 15px;
          background-color: rgba(37, 92, 153, 1);
          display: flex;
          padding-bottom: 32px;
          flex-direction: column;
          align-items: center;
        }
        .study-image {
          aspect-ratio: 2.49;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 15px 15px 0px 0px;
          align-self: stretch;
        }
        .study-title {
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-decoration: underline;
          margin-top: 12px;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 700;
          text-align: center;
        }
        .study-description {
          color: #fff;
          font-size: 16px;
          margin-top: 25px;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 700;
          text-align: center;
          padding: 0 15px;
        }
      `}</style>
    </article>
  );
}

export default StudyIdea;
