import React from 'react';

interface NoteCardProps {
  title: string;
  tags: string[];
  content: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, tags, content }) => {
  // Function to handle newlines in content
  const formatContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph}
        {index < text.split('\n\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <article className="note-card">
      <div className="note-content">
        <header className="note-header">
          <h2 className="note-title">{title}</h2>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <div key={index} className="tag">
                <span className="tag-text">{tag}</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M4 4L12 12" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>`,
                  }}
                />
              </div>
            ))}
          </div>
        </header>
        <p className="note-text">{formatContent(content)}</p>
      </div>

      <style jsx>{`
        .note-card {
          width: 100%;
          background-color: #255c99;
          border-radius: 15px;
          padding: 16px;
          opacity: 0.9;
        }

        .note-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .note-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .note-title {
          color: #f5f5f5;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }

        .tags-container {
          display: flex;
          gap: 8px;
        }

        .tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background-color: #b0b7c3;
          border-radius: 4px;
        }

        .tag-text {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .note-text {
          color: #f5f5f5;
          font-size: 16px;
          text-align: center;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }
      `}</style>
    </article>
  );
};

export default NoteCard;
